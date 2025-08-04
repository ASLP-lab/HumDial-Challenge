/**
 * @sgratzl/boxplots
 * https://github.com/sgratzl/boxplots
 *
 * Copyright (c) 2021 Samuel Gratzl <sam@sgratzl.com>
 */

const HELPER = Math.sqrt(2 * Math.PI);
function gaussian(u) {
    return Math.exp(-0.5 * u * u) / HELPER;
}
function toSampleVariance(variance, len) {
    return (variance * len) / (len - 1);
}
function nrd(iqr, variance, len) {
    let s = Math.sqrt(toSampleVariance(variance, len));
    if (typeof iqr === 'number') {
        s = Math.min(s, iqr / 1.34);
    }
    return 1.06 * s * Math.pow(len, -0.2);
}
function kde(stats) {
    const len = stats.items.length;
    const bandwidth = nrd(stats.iqr, stats.variance, len);
    return (x) => {
        let i = 0;
        let sum = 0;
        for (i = 0; i < len; i++) {
            const v = stats.items[i];
            sum += gaussian((x - v) / bandwidth);
        }
        return sum / bandwidth / len;
    };
}

function quantilesInterpolate(arr, length, interpolate) {
    const n1 = length - 1;
    const compute = (q) => {
        const index = q * n1;
        const lo = Math.floor(index);
        const h = index - lo;
        const a = arr[lo];
        return h === 0 ? a : interpolate(a, arr[Math.min(lo + 1, n1)], h);
    };
    return {
        q1: compute(0.25),
        median: compute(0.5),
        q3: compute(0.75),
    };
}
function quantilesType7(arr, length = arr.length) {
    return quantilesInterpolate(arr, length, (a, b, alpha) => a + alpha * (b - a));
}
function quantilesLinear(arr, length = arr.length) {
    return quantilesInterpolate(arr, length, (i, j, fraction) => i + (j - i) * fraction);
}
function quantilesLower(arr, length = arr.length) {
    return quantilesInterpolate(arr, length, (i) => i);
}
function quantilesHigher(arr, length = arr.length) {
    return quantilesInterpolate(arr, length, (_, j) => j);
}
function quantilesNearest(arr, length = arr.length) {
    return quantilesInterpolate(arr, length, (i, j, fraction) => (fraction < 0.5 ? i : j));
}
function quantilesMidpoint(arr, length = arr.length) {
    return quantilesInterpolate(arr, length, (i, j) => (i + j) * 0.5);
}
function quantilesFivenum(arr, length = arr.length) {
    const n = length;
    const n4 = Math.floor((n + 3) / 2) / 2;
    const compute = (d) => 0.5 * (arr[Math.floor(d) - 1] + arr[Math.ceil(d) - 1]);
    return {
        q1: compute(n4),
        median: compute((n + 1) / 2),
        q3: compute(n + 1 - n4),
    };
}
function quantilesHinges(arr, length = arr.length) {
    return quantilesFivenum(arr, length);
}

function createSortedData(data) {
    let valid = 0;
    const { length } = data;
    const vs = data instanceof Float64Array ? new Float64Array(length) : new Float32Array(length);
    for (let i = 0; i < length; i += 1) {
        const v = data[i];
        if (v == null || Number.isNaN(v)) {
            continue;
        }
        vs[valid] = v;
        valid += 1;
    }
    const missing = length - valid;
    if (valid === 0) {
        return {
            min: Number.NaN,
            max: Number.NaN,
            missing,
            s: [],
        };
    }
    const validData = valid === length ? vs : vs.subarray(0, valid);
    validData.sort((a, b) => (a === b ? 0 : a < b ? -1 : 1));
    const min = validData[0];
    const max = validData[validData.length - 1];
    return {
        min,
        max,
        missing,
        s: validData,
    };
}
function withSortedData(data) {
    if (data.length === 0) {
        return {
            min: Number.NaN,
            max: Number.NaN,
            missing: 0,
            s: [],
        };
    }
    const min = data[0];
    const max = data[data.length - 1];
    return {
        min,
        max,
        missing: 0,
        s: data,
    };
}
function computeWhiskers(s, valid, min, max, { eps, quantiles, coef, whiskersMode }) {
    const same = (a, b) => Math.abs(a - b) < eps;
    const { median, q1, q3 } = quantiles(s, valid);
    const iqr = q3 - q1;
    const isCoefValid = typeof coef === 'number' && coef > 0;
    let whiskerLow = isCoefValid ? Math.max(min, q1 - coef * iqr) : min;
    let whiskerHigh = isCoefValid ? Math.min(max, q3 + coef * iqr) : max;
    const outlierLow = [];
    for (let i = 0; i < valid; i += 1) {
        const v = s[i];
        if (v >= whiskerLow || same(v, whiskerLow)) {
            if (whiskersMode === 'nearest') {
                whiskerLow = v;
            }
            break;
        }
        if (outlierLow.length === 0 || !same(outlierLow[outlierLow.length - 1], v)) {
            outlierLow.push(v);
        }
    }
    const reversedOutlierHigh = [];
    for (let i = valid - 1; i >= 0; i -= 1) {
        const v = s[i];
        if (v <= whiskerHigh || same(v, whiskerHigh)) {
            if (whiskersMode === 'nearest') {
                whiskerHigh = v;
            }
            break;
        }
        if ((reversedOutlierHigh.length === 0 || !same(reversedOutlierHigh[reversedOutlierHigh.length - 1], v)) &&
            (outlierLow.length === 0 || !same(outlierLow[outlierLow.length - 1], v))) {
            reversedOutlierHigh.push(v);
        }
    }
    const outlier = outlierLow.concat(reversedOutlierHigh.reverse());
    return {
        median,
        q1,
        q3,
        iqr,
        outlier,
        whiskerHigh,
        whiskerLow,
    };
}
function computeStats(s, valid) {
    let mean = 0;
    for (let i = 0; i < valid; i++) {
        const v = s[i];
        mean += v;
    }
    mean /= valid;
    let variance = 0;
    for (let i = 0; i < valid; i++) {
        const v = s[i];
        variance += (v - mean) * (v - mean);
    }
    variance /= valid;
    return {
        mean,
        variance,
    };
}
function boxplot(data, options = {}) {
    const fullOptions = {
        coef: 1.5,
        eps: 10e-3,
        quantiles: quantilesType7,
        validAndSorted: false,
        whiskersMode: 'nearest',
        ...options,
    };
    const { missing, s, min, max } = fullOptions.validAndSorted ? withSortedData(data) : createSortedData(data);
    const invalid = {
        min: Number.NaN,
        max: Number.NaN,
        mean: Number.NaN,
        missing,
        iqr: Number.NaN,
        count: data.length,
        whiskerHigh: Number.NaN,
        whiskerLow: Number.NaN,
        outlier: [],
        median: Number.NaN,
        q1: Number.NaN,
        q3: Number.NaN,
        variance: 0,
        items: [],
        kde: () => 0,
    };
    const valid = data.length - missing;
    if (valid === 0) {
        return invalid;
    }
    const result = {
        min,
        max,
        count: data.length,
        missing,
        items: s,
        ...computeStats(s, valid),
        ...computeWhiskers(s, valid, min, max, fullOptions),
    };
    return {
        ...result,
        kde: kde(result),
    };
}

export { boxplot, boxplot as default, kde, quantilesFivenum, quantilesHigher, quantilesHinges, quantilesInterpolate, quantilesLinear, quantilesLower, quantilesMidpoint, quantilesNearest, quantilesType7 };
//# sourceMappingURL=index.js.map
