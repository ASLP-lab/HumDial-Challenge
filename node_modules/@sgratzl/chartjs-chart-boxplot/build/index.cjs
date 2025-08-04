/**
 * @sgratzl/chartjs-chart-boxplot
 * https://github.com/sgratzl/chartjs-chart-boxplot
 *
 * Copyright (c) 2019-2022 Samuel Gratzl <sam@sgratzl.com>
 */

'use strict';

var chart_js = require('chart.js');
var helpers = require('chart.js/helpers');
var boxplots = require('@sgratzl/boxplots');

function whiskers(boxplot, arr, coef = 1.5) {
    const iqr = boxplot.q3 - boxplot.q1;
    const coefValid = typeof coef === 'number' && coef > 0;
    let whiskerMin = coefValid ? Math.max(boxplot.min, boxplot.q1 - coef * iqr) : boxplot.min;
    let whiskerMax = coefValid ? Math.min(boxplot.max, boxplot.q3 + coef * iqr) : boxplot.max;
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i += 1) {
            const v = arr[i];
            if (v >= whiskerMin) {
                whiskerMin = v;
                break;
            }
        }
        for (let i = arr.length - 1; i >= 0; i -= 1) {
            const v = arr[i];
            if (v <= whiskerMax) {
                whiskerMax = v;
                break;
            }
        }
    }
    return {
        whiskerMin,
        whiskerMax,
    };
}
const defaultStatsOptions = {
    coef: 1.5,
    quantiles: 7,
};
function determineQuantiles(q) {
    if (typeof q === 'function') {
        return q;
    }
    const lookup = {
        hinges: boxplots.quantilesHinges,
        fivenum: boxplots.quantilesFivenum,
        7: boxplots.quantilesType7,
        quantiles: boxplots.quantilesType7,
        linear: boxplots.quantilesLinear,
        lower: boxplots.quantilesLower,
        higher: boxplots.quantilesHigher,
        nearest: boxplots.quantilesNearest,
        midpoint: boxplots.quantilesMidpoint,
    };
    return lookup[q] || boxplots.quantilesType7;
}
function determineStatsOptions(options) {
    const coef = options == null || typeof options.coef !== 'number' ? defaultStatsOptions.coef : options.coef;
    const q = options == null || options.quantiles == null ? boxplots.quantilesType7 : options.quantiles;
    const quantiles = determineQuantiles(q);
    return {
        coef,
        quantiles,
    };
}
function boxplotStats(arr, options) {
    const r = boxplots.boxplot(arr, determineStatsOptions(options));
    return {
        items: Array.from(r.items),
        outliers: r.outlier,
        whiskerMax: r.whiskerHigh,
        whiskerMin: r.whiskerLow,
        max: r.max,
        median: r.median,
        mean: r.mean,
        min: r.min,
        q1: r.q1,
        q3: r.q3,
    };
}
function computeSamples(min, max, points) {
    const range = max - min;
    const samples = [];
    const inc = range / points;
    for (let v = min; v <= max && inc > 0; v += inc) {
        samples.push(v);
    }
    if (samples[samples.length - 1] !== max) {
        samples.push(max);
    }
    return samples;
}
function violinStats(arr, options) {
    if (arr.length === 0) {
        return undefined;
    }
    const stats = boxplots.boxplot(arr, determineStatsOptions(options));
    const samples = computeSamples(stats.min, stats.max, options.points);
    const coords = samples.map((v) => ({ v, estimate: stats.kde(v) }));
    const maxEstimate = coords.reduce((a, d) => Math.max(a, d.estimate), Number.NEGATIVE_INFINITY);
    return {
        max: stats.max,
        min: stats.min,
        mean: stats.mean,
        median: stats.median,
        q1: stats.q1,
        q3: stats.q3,
        items: Array.from(stats.items),
        coords,
        outliers: [],
        maxEstimate,
    };
}
function asBoxPlotStats(value, options) {
    if (!value) {
        return undefined;
    }
    if (typeof value.median === 'number' && typeof value.q1 === 'number' && typeof value.q3 === 'number') {
        if (typeof value.whiskerMin === 'undefined') {
            const { coef } = determineStatsOptions(options);
            const { whiskerMin, whiskerMax } = whiskers(value, Array.isArray(value.items) ? value.items.slice().sort((a, b) => a - b) : null, coef);
            value.whiskerMin = whiskerMin;
            value.whiskerMax = whiskerMax;
        }
        return value;
    }
    if (!Array.isArray(value)) {
        return undefined;
    }
    return boxplotStats(value, options);
}
function asViolinStats(value, options) {
    if (!value) {
        return undefined;
    }
    if (typeof value.median === 'number' && Array.isArray(value.coords)) {
        return value;
    }
    if (!Array.isArray(value)) {
        return undefined;
    }
    return violinStats(value, options);
}
function rnd(seed = Date.now()) {
    let s = seed;
    return () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
}

const baseDefaults$1 = {
    borderWidth: 1,
    outlierStyle: 'circle',
    outlierRadius: 2,
    outlierBorderWidth: 1,
    itemStyle: 'circle',
    itemRadius: 0,
    itemBorderWidth: 0,
    meanStyle: 'circle',
    meanRadius: 3,
    meanBorderWidth: 1,
    hitPadding: 2,
    outlierHitRadius: 4,
};
const baseRoutes = {
    outlierBackgroundColor: 'backgroundColor',
    outlierBorderColor: 'borderColor',
    itemBackgroundColor: 'backgroundColor',
    itemBorderColor: 'borderColor',
    meanBackgroundColor: 'backgroundColor',
    meanBorderColor: 'borderColor',
};
const baseOptionKeys = (() => Object.keys(baseDefaults$1).concat(Object.keys(baseRoutes)))();
let StatsBase$1 = class StatsBase extends chart_js.Element {
    isVertical() {
        return !this.horizontal;
    }
    _drawItems(ctx) {
        const vert = this.isVertical();
        const props = this.getProps(['x', 'y', 'items', 'width', 'height', 'outliers']);
        const { options } = this;
        if (options.itemRadius <= 0 || !props.items || props.items.length <= 0) {
            return;
        }
        ctx.save();
        ctx.strokeStyle = options.itemBorderColor;
        ctx.fillStyle = options.itemBackgroundColor;
        ctx.lineWidth = options.itemBorderWidth;
        const random = rnd(this._datasetIndex * 1000 + this._index);
        const pointOptions = {
            pointStyle: options.itemStyle,
            radius: options.itemRadius,
            borderWidth: options.itemBorderWidth,
        };
        const outliers = new Set(props.outliers || []);
        if (vert) {
            props.items.forEach((v) => {
                if (!outliers.has(v)) {
                    helpers.drawPoint(ctx, pointOptions, props.x - props.width / 2 + random() * props.width, v);
                }
            });
        }
        else {
            props.items.forEach((v) => {
                if (!outliers.has(v)) {
                    helpers.drawPoint(ctx, pointOptions, v, props.y - props.height / 2 + random() * props.height);
                }
            });
        }
        ctx.restore();
    }
    _drawOutliers(ctx) {
        const vert = this.isVertical();
        const props = this.getProps(['x', 'y', 'outliers']);
        const { options } = this;
        if (options.outlierRadius <= 0 || !props.outliers || props.outliers.length === 0) {
            return;
        }
        ctx.save();
        ctx.fillStyle = options.outlierBackgroundColor;
        ctx.strokeStyle = options.outlierBorderColor;
        ctx.lineWidth = options.outlierBorderWidth;
        const pointOptions = {
            pointStyle: options.outlierStyle,
            radius: options.outlierRadius,
            borderWidth: options.outlierBorderWidth,
        };
        if (vert) {
            props.outliers.forEach((v) => {
                helpers.drawPoint(ctx, pointOptions, props.x, v);
            });
        }
        else {
            props.outliers.forEach((v) => {
                helpers.drawPoint(ctx, pointOptions, v, props.y);
            });
        }
        ctx.restore();
    }
    _drawMeanDot(ctx) {
        const vert = this.isVertical();
        const props = this.getProps(['x', 'y', 'mean']);
        const { options } = this;
        if (options.meanRadius <= 0 || props.mean == null || Number.isNaN(props.mean)) {
            return;
        }
        ctx.save();
        ctx.fillStyle = options.meanBackgroundColor;
        ctx.strokeStyle = options.meanBorderColor;
        ctx.lineWidth = options.meanBorderWidth;
        const pointOptions = {
            pointStyle: options.meanStyle,
            radius: options.meanRadius,
            borderWidth: options.meanBorderWidth,
        };
        if (vert) {
            helpers.drawPoint(ctx, pointOptions, props.x, props.mean);
        }
        else {
            helpers.drawPoint(ctx, pointOptions, props.mean, props.y);
        }
        ctx.restore();
    }
    _getBounds(_useFinalPosition) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
        };
    }
    _getHitBounds(useFinalPosition) {
        const padding = this.options.hitPadding;
        const b = this._getBounds(useFinalPosition);
        return {
            left: b.left - padding,
            top: b.top - padding,
            right: b.right + padding,
            bottom: b.bottom + padding,
        };
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        if (Number.isNaN(this.x) && Number.isNaN(this.y)) {
            return false;
        }
        return (this._boxInRange(mouseX, mouseY, useFinalPosition) ||
            this._outlierIndexInRange(mouseX, mouseY, useFinalPosition) >= 0);
    }
    inXRange(mouseX, useFinalPosition) {
        const bounds = this._getHitBounds(useFinalPosition);
        return mouseX >= bounds.left && mouseX <= bounds.right;
    }
    inYRange(mouseY, useFinalPosition) {
        const bounds = this._getHitBounds(useFinalPosition);
        return mouseY >= bounds.top && mouseY <= bounds.bottom;
    }
    _outlierIndexInRange(mouseX, mouseY, useFinalPosition) {
        const props = this.getProps(['x', 'y'], useFinalPosition);
        const hitRadius = this.options.outlierHitRadius;
        const outliers = this._getOutliers(useFinalPosition);
        const vertical = this.isVertical();
        if ((vertical && Math.abs(mouseX - props.x) > hitRadius) || (!vertical && Math.abs(mouseY - props.y) > hitRadius)) {
            return -1;
        }
        const toCompare = vertical ? mouseY : mouseX;
        for (let i = 0; i < outliers.length; i += 1) {
            if (Math.abs(outliers[i] - toCompare) <= hitRadius) {
                return i;
            }
        }
        return -1;
    }
    _boxInRange(mouseX, mouseY, useFinalPosition) {
        const bounds = this._getHitBounds(useFinalPosition);
        return mouseX >= bounds.left && mouseX <= bounds.right && mouseY >= bounds.top && mouseY <= bounds.bottom;
    }
    getCenterPoint(useFinalPosition) {
        const props = this.getProps(['x', 'y'], useFinalPosition);
        return {
            x: props.x,
            y: props.y,
        };
    }
    _getOutliers(useFinalPosition) {
        const props = this.getProps(['outliers'], useFinalPosition);
        return props.outliers || [];
    }
    tooltipPosition(eventPosition, tooltip) {
        if (!eventPosition || typeof eventPosition === 'boolean') {
            return this.getCenterPoint();
        }
        if (tooltip) {
            delete tooltip._tooltipOutlier;
        }
        const props = this.getProps(['x', 'y']);
        const index = this._outlierIndexInRange(eventPosition.x, eventPosition.y);
        if (index < 0 || !tooltip) {
            return this.getCenterPoint();
        }
        tooltip._tooltipOutlier = {
            index,
            datasetIndex: this._datasetIndex,
        };
        if (this.isVertical()) {
            return {
                x: props.x,
                y: this._getOutliers()[index],
            };
        }
        return {
            x: this._getOutliers()[index],
            y: props.y,
        };
    }
};

const boxOptionsKeys = baseOptionKeys.concat(['medianColor', 'lowerBackgroundColor']);
class BoxAndWiskers extends StatsBase$1 {
    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.options.backgroundColor;
        ctx.strokeStyle = this.options.borderColor;
        ctx.lineWidth = this.options.borderWidth;
        this._drawBoxPlot(ctx);
        this._drawOutliers(ctx);
        this._drawMeanDot(ctx);
        ctx.restore();
        this._drawItems(ctx);
    }
    _drawBoxPlot(ctx) {
        if (this.isVertical()) {
            this._drawBoxPlotVertical(ctx);
        }
        else {
            this._drawBoxPlotHorizontal(ctx);
        }
    }
    _drawBoxPlotVertical(ctx) {
        const { options } = this;
        const props = this.getProps(['x', 'width', 'q1', 'q3', 'median', 'whiskerMin', 'whiskerMax']);
        const { x } = props;
        const { width } = props;
        const x0 = x - width / 2;
        if (props.q3 > props.q1) {
            ctx.fillRect(x0, props.q1, width, props.q3 - props.q1);
        }
        else {
            ctx.fillRect(x0, props.q3, width, props.q1 - props.q3);
        }
        ctx.save();
        if (options.medianColor && options.medianColor !== 'transparent' && options.medianColor !== '#0000') {
            ctx.strokeStyle = options.medianColor;
        }
        ctx.beginPath();
        ctx.moveTo(x0, props.median);
        ctx.lineTo(x0 + width, props.median);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        if (options.lowerBackgroundColor &&
            options.lowerBackgroundColor !== 'transparent' &&
            options.lowerBackgroundColor !== '#0000') {
            ctx.fillStyle = options.lowerBackgroundColor;
            if (props.q3 > props.q1) {
                ctx.fillRect(x0, props.median, width, props.q3 - props.median);
            }
            else {
                ctx.fillRect(x0, props.median, width, props.q1 - props.median);
            }
        }
        ctx.restore();
        if (props.q3 > props.q1) {
            ctx.strokeRect(x0, props.q1, width, props.q3 - props.q1);
        }
        else {
            ctx.strokeRect(x0, props.q3, width, props.q1 - props.q3);
        }
        ctx.beginPath();
        ctx.moveTo(x0, props.whiskerMin);
        ctx.lineTo(x0 + width, props.whiskerMin);
        ctx.moveTo(x, props.whiskerMin);
        ctx.lineTo(x, props.q1);
        ctx.moveTo(x0, props.whiskerMax);
        ctx.lineTo(x0 + width, props.whiskerMax);
        ctx.moveTo(x, props.whiskerMax);
        ctx.lineTo(x, props.q3);
        ctx.closePath();
        ctx.stroke();
    }
    _drawBoxPlotHorizontal(ctx) {
        const { options } = this;
        const props = this.getProps(['y', 'height', 'q1', 'q3', 'median', 'whiskerMin', 'whiskerMax']);
        const { y } = props;
        const { height } = props;
        const y0 = y - height / 2;
        if (props.q3 > props.q1) {
            ctx.fillRect(props.q1, y0, props.q3 - props.q1, height);
        }
        else {
            ctx.fillRect(props.q3, y0, props.q1 - props.q3, height);
        }
        ctx.save();
        if (options.medianColor && options.medianColor !== 'transparent') {
            ctx.strokeStyle = options.medianColor;
        }
        ctx.beginPath();
        ctx.moveTo(props.median, y0);
        ctx.lineTo(props.median, y0 + height);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        if (options.lowerBackgroundColor && options.lowerBackgroundColor !== 'transparent') {
            ctx.fillStyle = options.lowerBackgroundColor;
            if (props.q3 > props.q1) {
                ctx.fillRect(props.median, y0, props.q3 - props.median, height);
            }
            else {
                ctx.fillRect(props.median, y0, props.q1 - props.median, height);
            }
        }
        ctx.restore();
        if (props.q3 > props.q1) {
            ctx.strokeRect(props.q1, y0, props.q3 - props.q1, height);
        }
        else {
            ctx.strokeRect(props.q3, y0, props.q1 - props.q3, height);
        }
        ctx.beginPath();
        ctx.moveTo(props.whiskerMin, y0);
        ctx.lineTo(props.whiskerMin, y0 + height);
        ctx.moveTo(props.whiskerMin, y);
        ctx.lineTo(props.q1, y);
        ctx.moveTo(props.whiskerMax, y0);
        ctx.lineTo(props.whiskerMax, y0 + height);
        ctx.moveTo(props.whiskerMax, y);
        ctx.lineTo(props.q3, y);
        ctx.closePath();
        ctx.stroke();
    }
    _getBounds(useFinalPosition) {
        const vert = this.isVertical();
        if (this.x == null) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
            };
        }
        if (vert) {
            const { x, width, whiskerMax, whiskerMin } = this.getProps(['x', 'width', 'whiskerMin', 'whiskerMax'], useFinalPosition);
            const x0 = x - width / 2;
            return {
                left: x0,
                top: whiskerMax,
                right: x0 + width,
                bottom: whiskerMin,
            };
        }
        const { y, height, whiskerMax, whiskerMin } = this.getProps(['y', 'height', 'whiskerMin', 'whiskerMax'], useFinalPosition);
        const y0 = y - height / 2;
        return {
            left: whiskerMin,
            top: y0,
            right: whiskerMax,
            bottom: y0 + height,
        };
    }
}
BoxAndWiskers.id = 'boxandwhiskers';
BoxAndWiskers.defaults = {
    ...chart_js.BarElement.defaults,
    ...baseDefaults$1,
    medianColor: 'transparent',
    lowerBackgroundColor: 'transparent',
};
BoxAndWiskers.defaultRoutes = { ...chart_js.BarElement.defaultRoutes, ...baseRoutes };

class Violin extends StatsBase$1 {
    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.options.backgroundColor;
        ctx.strokeStyle = this.options.borderColor;
        ctx.lineWidth = this.options.borderWidth;
        const props = this.getProps(['x', 'y', 'median', 'width', 'height', 'min', 'max', 'coords', 'maxEstimate']);
        if (props.median != null) {
            helpers.drawPoint(ctx, {
                pointStyle: 'rectRot',
                radius: 5,
                borderWidth: this.options.borderWidth,
            }, props.x, props.y);
        }
        if (props.coords && props.coords.length > 0) {
            this._drawCoords(ctx, props);
        }
        this._drawOutliers(ctx);
        this._drawMeanDot(ctx);
        ctx.restore();
        this._drawItems(ctx);
    }
    _drawCoords(ctx, props) {
        let maxEstimate;
        if (props.maxEstimate == null) {
            maxEstimate = props.coords.reduce((a, d) => Math.max(a, d.estimate), Number.NEGATIVE_INFINITY);
        }
        else {
            maxEstimate = props.maxEstimate;
        }
        if (this.isVertical()) {
            const { x, width } = props;
            const factor = width / 2 / maxEstimate;
            ctx.moveTo(x, props.min);
            props.coords.forEach((c) => {
                ctx.lineTo(x - c.estimate * factor, c.v);
            });
            ctx.lineTo(x, props.max);
            ctx.moveTo(x, props.min);
            props.coords.forEach((c) => {
                ctx.lineTo(x + c.estimate * factor, c.v);
            });
            ctx.lineTo(x, props.max);
        }
        else {
            const { y, height } = props;
            const factor = height / 2 / maxEstimate;
            ctx.moveTo(props.min, y);
            props.coords.forEach((c) => {
                ctx.lineTo(c.v, y - c.estimate * factor);
            });
            ctx.lineTo(props.max, y);
            ctx.moveTo(props.min, y);
            props.coords.forEach((c) => {
                ctx.lineTo(c.v, y + c.estimate * factor);
            });
            ctx.lineTo(props.max, y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
    _getBounds(useFinalPosition) {
        if (this.isVertical()) {
            const { x, width, min, max } = this.getProps(['x', 'width', 'min', 'max'], useFinalPosition);
            const x0 = x - width / 2;
            return {
                left: x0,
                top: max,
                right: x0 + width,
                bottom: min,
            };
        }
        const { y, height, min, max } = this.getProps(['y', 'height', 'min', 'max'], useFinalPosition);
        const y0 = y - height / 2;
        return {
            left: min,
            top: y0,
            right: max,
            bottom: y0 + height,
        };
    }
}
Violin.id = 'violin';
Violin.defaults = { ...chart_js.BarElement.defaults, ...baseDefaults$1 };
Violin.defaultRoutes = { ...chart_js.BarElement.defaultRoutes, ...baseRoutes };

const interpolators = {
    number(from, to, factor) {
        if (from === to) {
            return to;
        }
        if (from == null) {
            return to;
        }
        if (to == null) {
            return from;
        }
        return from + (to - from) * factor;
    },
};
function interpolateNumberArray(from, to, factor) {
    if (typeof from === 'number' && typeof to === 'number') {
        return interpolators.number(from, to, factor);
    }
    if (Array.isArray(from) && Array.isArray(to)) {
        return to.map((t, i) => interpolators.number(from[i], t, factor));
    }
    return to;
}
function interpolateKdeCoords(from, to, factor) {
    if (Array.isArray(from) && Array.isArray(to)) {
        return to.map((t, i) => ({
            v: interpolators.number(from[i] ? from[i].v : null, t.v, factor),
            estimate: interpolators.number(from[i] ? from[i].estimate : null, t.estimate, factor),
        }));
    }
    return to;
}

function patchInHoveredOutlier(item) {
    const value = item.formattedValue;
    const that = this;
    if (value && that._tooltipOutlier != null && item.datasetIndex === that._tooltipOutlier.datasetIndex) {
        value.hoveredOutlierIndex = that._tooltipOutlier.index;
    }
}
function outlierPositioner(items, eventPosition) {
    if (!items.length) {
        return false;
    }
    let x = 0;
    let y = 0;
    let count = 0;
    for (let i = 0; i < items.length; i += 1) {
        const el = items[i].element;
        if (el && el.hasValue()) {
            const pos = el.tooltipPosition(eventPosition, this);
            x += pos.x;
            y += pos.y;
            count += 1;
        }
    }
    return {
        x: x / count,
        y: y / count,
    };
}
outlierPositioner.id = 'average';
outlierPositioner.register = () => {
    chart_js.Tooltip.positioners.average = outlierPositioner;
    return outlierPositioner;
};

function baseDefaults(keys) {
    const colorKeys = ['borderColor', 'backgroundColor'].concat(keys.filter((c) => c.endsWith('Color')));
    return {
        animations: {
            numberArray: {
                fn: interpolateNumberArray,
                properties: ['outliers', 'items'],
            },
            colors: {
                type: 'color',
                properties: colorKeys,
            },
        },
        transitions: {
            show: {
                animations: {
                    colors: {
                        type: 'color',
                        properties: colorKeys,
                        from: 'transparent',
                    },
                },
            },
            hide: {
                animations: {
                    colors: {
                        type: 'color',
                        properties: colorKeys,
                        to: 'transparent',
                    },
                },
            },
        },
        minStats: 'min',
        maxStats: 'max',
        ...defaultStatsOptions,
    };
}
function defaultOverrides() {
    return {
        plugins: {
            tooltip: {
                position: outlierPositioner.register().id,
                callbacks: {
                    beforeLabel: patchInHoveredOutlier,
                },
            },
        },
    };
}
class StatsBase extends chart_js.BarController {
    _transformStats(target, source, mapper) {
        for (const key of ['min', 'max', 'median', 'q3', 'q1', 'mean']) {
            const v = source[key];
            if (typeof v === 'number') {
                target[key] = mapper(v);
            }
        }
        for (const key of ['outliers', 'items']) {
            if (Array.isArray(source[key])) {
                target[key] = source[key].map(mapper);
            }
        }
    }
    getMinMax(scale, canStack) {
        const bak = scale.axis;
        const config = this.options;
        scale.axis = config.minStats;
        const { min } = super.getMinMax(scale, canStack);
        scale.axis = config.maxStats;
        const { max } = super.getMinMax(scale, canStack);
        scale.axis = bak;
        return { min, max };
    }
    parsePrimitiveData(meta, data, start, count) {
        const vScale = meta.vScale;
        const iScale = meta.iScale;
        const labels = iScale.getLabels();
        const r = [];
        for (let i = 0; i < count; i += 1) {
            const index = i + start;
            const parsed = {};
            parsed[iScale.axis] = iScale.parse(labels[index], index);
            const stats = this._parseStats(data == null ? null : data[index], this.options);
            if (stats) {
                Object.assign(parsed, stats);
                parsed[vScale.axis] = stats.median;
            }
            r.push(parsed);
        }
        return r;
    }
    parseArrayData(meta, data, start, count) {
        return this.parsePrimitiveData(meta, data, start, count);
    }
    parseObjectData(meta, data, start, count) {
        return this.parsePrimitiveData(meta, data, start, count);
    }
    getLabelAndValue(index) {
        const r = super.getLabelAndValue(index);
        const { vScale } = this._cachedMeta;
        const parsed = this.getParsed(index);
        if (!vScale || !parsed || r.value === 'NaN') {
            return r;
        }
        r.value = {
            raw: parsed,
            hoveredOutlierIndex: -1,
        };
        this._transformStats(r.value, parsed, (v) => vScale.getLabelForValue(v));
        const s = this._toStringStats(r.value.raw);
        r.value.toString = function toString() {
            if (this.hoveredOutlierIndex >= 0) {
                return `(outlier: ${this.outliers[this.hoveredOutlierIndex]})`;
            }
            return s;
        };
        return r;
    }
    _toStringStats(b) {
        const f = (v) => (v == null ? 'NaN' : helpers.formatNumber(v, this.chart.options.locale, {}));
        return `(min: ${f(b.min)}, 25% quantile: ${f(b.q1)}, median: ${f(b.median)}, mean: ${f(b.mean)}, 75% quantile: ${f(b.q3)}, max: ${f(b.max)})`;
    }
    updateElement(rectangle, index, properties, mode) {
        const reset = mode === 'reset';
        const scale = this._cachedMeta.vScale;
        const parsed = this.getParsed(index);
        const base = scale.getBasePixel();
        properties._datasetIndex = this.index;
        properties._index = index;
        this._transformStats(properties, parsed, (v) => (reset ? base : scale.getPixelForValue(v, index)));
        super.updateElement(rectangle, index, properties, mode);
    }
}

function patchController(type, config, controller, elements = [], scales = []) {
    chart_js.registry.addControllers(controller);
    if (Array.isArray(elements)) {
        chart_js.registry.addElements(...elements);
    }
    else {
        chart_js.registry.addElements(elements);
    }
    if (Array.isArray(scales)) {
        chart_js.registry.addScales(...scales);
    }
    else {
        chart_js.registry.addScales(scales);
    }
    const c = config;
    c.type = type;
    return c;
}

class BoxPlotController extends StatsBase {
    _parseStats(value, config) {
        return asBoxPlotStats(value, config);
    }
    _transformStats(target, source, mapper) {
        super._transformStats(target, source, mapper);
        for (const key of ['whiskerMin', 'whiskerMax']) {
            target[key] = mapper(source[key]);
        }
    }
}
BoxPlotController.id = 'boxplot';
BoxPlotController.defaults = helpers.merge({}, [
    chart_js.BarController.defaults,
    baseDefaults(boxOptionsKeys),
    {
        animations: {
            numbers: {
                type: 'number',
                properties: chart_js.BarController.defaults.animations.numbers.properties.concat(['q1', 'q3', 'min', 'max', 'median', 'whiskerMin', 'whiskerMax', 'mean'], boxOptionsKeys.filter((c) => !c.endsWith('Color'))),
            },
        },
        dataElementType: BoxAndWiskers.id,
    },
]);
BoxPlotController.overrides = helpers.merge({}, [chart_js.BarController.overrides, defaultOverrides()]);
class BoxPlotChart extends chart_js.Chart {
    constructor(item, config) {
        super(item, patchController('boxplot', config, BoxPlotController, BoxAndWiskers, [chart_js.LinearScale, chart_js.CategoryScale]));
    }
}
BoxPlotChart.id = BoxPlotController.id;

class ViolinController extends StatsBase {
    _parseStats(value, config) {
        return asViolinStats(value, config);
    }
    _transformStats(target, source, mapper) {
        super._transformStats(target, source, mapper);
        target.maxEstimate = source.maxEstimate;
        if (Array.isArray(source.coords)) {
            target.coords = source.coords.map((c) => ({ ...c, v: mapper(c.v) }));
        }
    }
}
ViolinController.id = 'violin';
ViolinController.defaults = helpers.merge({}, [
    chart_js.BarController.defaults,
    baseDefaults(baseOptionKeys),
    {
        points: 100,
        animations: {
            numbers: {
                type: 'number',
                properties: chart_js.BarController.defaults.animations.numbers.properties.concat(['q1', 'q3', 'min', 'max', 'median', 'maxEstimate'], baseOptionKeys.filter((c) => !c.endsWith('Color'))),
            },
            kdeCoords: {
                fn: interpolateKdeCoords,
                properties: ['coords'],
            },
        },
        dataElementType: Violin.id,
    },
]);
ViolinController.overrides = helpers.merge({}, [chart_js.BarController.overrides, defaultOverrides()]);
class ViolinChart extends chart_js.Chart {
    constructor(item, config) {
        super(item, patchController('violin', config, ViolinController, Violin, [chart_js.LinearScale, chart_js.CategoryScale]));
    }
}
ViolinChart.id = ViolinController.id;

exports.BoxAndWiskers = BoxAndWiskers;
exports.BoxPlotChart = BoxPlotChart;
exports.BoxPlotController = BoxPlotController;
exports.StatsBase = StatsBase$1;
exports.Violin = Violin;
exports.ViolinChart = ViolinChart;
exports.ViolinController = ViolinController;
//# sourceMappingURL=index.cjs.map
