/**
 * @sgratzl/chartjs-chart-boxplot
 * https://github.com/sgratzl/chartjs-chart-boxplot
 *
 * Copyright (c) 2019-2022 Samuel Gratzl <sam@sgratzl.com>
 */

import { TooltipModel, Element, ChartType, ScriptableAndArrayOptions, CommonHoverOptions, ScriptableContext, BarController, Scale, ChartMeta, UpdateMode, CartesianScaleTypeRegistry, ControllerDatasetOptions, AnimationOptions, Chart, ChartItem, ChartConfiguration } from 'chart.js';

interface ExtendedTooltip extends TooltipModel<'boxplot' | 'violin'> {
    _tooltipOutlier?: {
        index: number;
        datasetIndex: number;
    };
}

interface IStatsBaseOptions {
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    outlierStyle: 'circle' | 'triangle' | 'rect' | 'rectRounded' | 'rectRot' | 'cross' | 'crossRot' | 'star' | 'line' | 'dash';
    outlierRadius: number;
    outlierBackgroundColor: string;
    outlierBorderColor: string;
    outlierBorderWidth: number;
    itemStyle: 'circle' | 'triangle' | 'rect' | 'rectRounded' | 'rectRot' | 'cross' | 'crossRot' | 'star' | 'line' | 'dash';
    itemRadius: number;
    itemBackgroundColor: string;
    itemBorderColor: string;
    itemBorderWidth: number;
    hitPadding: number;
    outlierHitRadius: number;
    meanStyle: 'circle' | 'triangle' | 'rect' | 'rectRounded' | 'rectRot' | 'cross' | 'crossRot' | 'star' | 'line' | 'dash';
    meanRadius: number;
    meanBackgroundColor: string;
    meanBorderColor: string;
    meanBorderWidth: number;
}
interface IStatsBaseProps {
    x: number;
    y: number;
    width: number;
    height: number;
    items: number[];
    outliers: number[];
}
declare class StatsBase$1<T extends IStatsBaseProps & {
    mean?: number;
}, O extends IStatsBaseOptions> extends Element<T, O> {
    _datasetIndex: number;
    horizontal: boolean;
    _index: number;
    isVertical(): boolean;
    protected _drawItems(ctx: CanvasRenderingContext2D): void;
    protected _drawOutliers(ctx: CanvasRenderingContext2D): void;
    protected _drawMeanDot(ctx: CanvasRenderingContext2D): void;
    _getBounds(_useFinalPosition?: boolean): {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    _getHitBounds(useFinalPosition?: boolean): {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    inRange(mouseX: number, mouseY: number, useFinalPosition?: boolean): boolean;
    inXRange(mouseX: number, useFinalPosition?: boolean): boolean;
    inYRange(mouseY: number, useFinalPosition?: boolean): boolean;
    protected _outlierIndexInRange(mouseX: number, mouseY: number, useFinalPosition?: boolean): number;
    protected _boxInRange(mouseX: number, mouseY: number, useFinalPosition?: boolean): boolean;
    getCenterPoint(useFinalPosition?: boolean): {
        x: number;
        y: number;
    };
    protected _getOutliers(useFinalPosition?: boolean): number[];
    tooltipPosition(eventPosition?: {
        x: number;
        y: number;
    } | boolean, tooltip?: ExtendedTooltip): {
        x: number;
        y: number;
    };
}

interface IBoxAndWhiskersOptions extends IStatsBaseOptions {
    medianColor: string;
    lowerBackgroundColor: string;
}
interface IBoxAndWhiskerProps extends IStatsBaseProps {
    q1: number;
    q3: number;
    median: number;
    whiskerMin: number;
    whiskerMax: number;
    mean: number;
}
declare class BoxAndWiskers extends StatsBase$1<IBoxAndWhiskerProps, IBoxAndWhiskersOptions> {
    draw(ctx: CanvasRenderingContext2D): void;
    protected _drawBoxPlot(ctx: CanvasRenderingContext2D): void;
    protected _drawBoxPlotVertical(ctx: CanvasRenderingContext2D): void;
    protected _drawBoxPlotHorizontal(ctx: CanvasRenderingContext2D): void;
    _getBounds(useFinalPosition?: boolean): {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    static id: string;
    static defaults: {
        medianColor: string;
        lowerBackgroundColor: string;
        borderWidth: number;
        outlierStyle: string;
        outlierRadius: number;
        outlierBorderWidth: number;
        itemStyle: string;
        itemRadius: number;
        itemBorderWidth: number;
        meanStyle: string;
        meanRadius: number;
        meanBorderWidth: number;
        hitPadding: number;
        outlierHitRadius: number;
    };
    static defaultRoutes: {
        outlierBackgroundColor: string;
        outlierBorderColor: string;
        itemBackgroundColor: string;
        itemBorderColor: string;
        meanBackgroundColor: string;
        meanBorderColor: string;
    };
}
declare module 'chart.js' {
    interface ElementOptionsByType<TType extends ChartType> {
        boxplot: ScriptableAndArrayOptions<IBoxAndWhiskersOptions & CommonHoverOptions, ScriptableContext<TType>>;
    }
}

interface IBaseStats {
    min: number;
    max: number;
    q1: number;
    q3: number;
    median: number;
    mean: number;
    items: readonly number[];
    outliers: readonly number[];
}
interface IBoxPlot extends IBaseStats {
    whiskerMax: number;
    whiskerMin: number;
}
interface IKDEPoint {
    v: number;
    estimate: number;
}
interface IViolin extends IBaseStats {
    maxEstimate: number;
    coords: IKDEPoint[];
}
type QuantileMethod = 7 | 'quantiles' | 'hinges' | 'fivenum' | 'linear' | 'lower' | 'higher' | 'nearest' | 'midpoint' | ((arr: ArrayLike<number>, length?: number | undefined) => {
    q1: number;
    median: number;
    q3: number;
});
interface IBaseOptions {
    minStats?: 'min' | 'q1' | 'whiskerMin';
    maxStats?: 'max' | 'q3' | 'whiskerMax';
    coef?: number;
    quantiles?: QuantileMethod;
}
type IBoxplotOptions = IBaseOptions;
interface IViolinOptions extends IBaseOptions {
    points: number;
}

type IViolinElementOptions = IStatsBaseOptions;
interface IViolinElementProps extends IStatsBaseProps {
    min: number;
    max: number;
    median: number;
    coords: IKDEPoint[];
    maxEstimate?: number;
}
declare class Violin extends StatsBase$1<IViolinElementProps, IViolinElementOptions> {
    draw(ctx: CanvasRenderingContext2D): void;
    protected _drawCoords(ctx: CanvasRenderingContext2D, props: Pick<IViolinElementProps, 'x' | 'coords' | 'y' | 'maxEstimate' | 'width' | 'height' | 'min' | 'max'>): void;
    _getBounds(useFinalPosition?: boolean): {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    static id: string;
    static defaults: {
        borderWidth: number;
        outlierStyle: string;
        outlierRadius: number;
        outlierBorderWidth: number;
        itemStyle: string;
        itemRadius: number;
        itemBorderWidth: number;
        meanStyle: string;
        meanRadius: number;
        meanBorderWidth: number;
        hitPadding: number;
        outlierHitRadius: number;
    };
    static defaultRoutes: {
        outlierBackgroundColor: string;
        outlierBorderColor: string;
        itemBackgroundColor: string;
        itemBorderColor: string;
        meanBackgroundColor: string;
        meanBorderColor: string;
    };
}
declare module 'chart.js' {
    interface ElementOptionsByType<TType extends ChartType> {
        violin: ScriptableAndArrayOptions<IViolinElementOptions & CommonHoverOptions, ScriptableContext<TType>>;
    }
}

declare abstract class StatsBase<S extends IBaseStats, C extends Required<IBaseOptions>> extends BarController {
    options: C;
    protected _transformStats<T>(target: any, source: S, mapper: (v: number) => T): void;
    getMinMax(scale: Scale, canStack?: boolean | undefined): {
        min: number;
        max: number;
    };
    parsePrimitiveData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    parseArrayData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    parseObjectData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    protected abstract _parseStats(value: any, options: C): S | undefined;
    getLabelAndValue(index: number): {
        label: string;
        value: string & {
            raw: S;
            hoveredOutlierIndex: number;
        } & S;
    };
    protected _toStringStats(b: S): string;
    updateElement(rectangle: Element, index: number, properties: any, mode: UpdateMode): void;
}

declare class BoxPlotController extends StatsBase<IBoxPlot, Required<IBoxplotOptions>> {
    protected _parseStats(value: unknown, config: IBoxplotOptions): IBoxPlot | undefined;
    protected _transformStats<T>(target: any, source: IBoxPlot, mapper: (v: number) => T): void;
    static readonly id = "boxplot";
    static readonly defaults: any;
    static readonly overrides: any;
}
interface BoxPlotControllerDatasetOptions extends ControllerDatasetOptions, IBoxplotOptions, ScriptableAndArrayOptions<IBoxAndWhiskersOptions, ScriptableContext<'boxplot'>>, ScriptableAndArrayOptions<CommonHoverOptions, ScriptableContext<'boxplot'>>, AnimationOptions<'boxplot'> {
}
type BoxPlotDataPoint = number[] | (Partial<IBoxPlot> & IBaseStats);
interface IBoxPlotChartOptions {
}
declare module 'chart.js' {
    interface ChartTypeRegistry {
        boxplot: {
            chartOptions: IBoxPlotChartOptions;
            datasetOptions: BoxPlotControllerDatasetOptions;
            defaultDataPoint: BoxPlotDataPoint;
            scales: keyof CartesianScaleTypeRegistry;
            metaExtensions: {};
            parsedDataType: IBoxPlot & ChartTypeRegistry['bar']['parsedDataType'];
        };
    }
}
declare class BoxPlotChart<DATA extends unknown[] = BoxPlotDataPoint[], LABEL = string> extends Chart<'boxplot', DATA, LABEL> {
    static id: string;
    constructor(item: ChartItem, config: Omit<ChartConfiguration<'boxplot', DATA, LABEL>, 'type'>);
}

declare class ViolinController extends StatsBase<IViolin, Required<IViolinOptions>> {
    protected _parseStats(value: any, config: IViolinOptions): IViolin | undefined;
    protected _transformStats<T>(target: any, source: IViolin, mapper: (v: number) => T): void;
    static readonly id = "violin";
    static readonly defaults: any;
    static readonly overrides: any;
}
type ViolinDataPoint = number[] | (Partial<IViolin> & IBaseStats);
interface ViolinControllerDatasetOptions extends ControllerDatasetOptions, IViolinOptions, ScriptableAndArrayOptions<IViolinElementOptions, ScriptableContext<'violin'>>, ScriptableAndArrayOptions<CommonHoverOptions, ScriptableContext<'violin'>>, AnimationOptions<'violin'> {
}
interface IViolinChartOptions {
}
declare module 'chart.js' {
    interface ChartTypeRegistry {
        violin: {
            chartOptions: IViolinChartOptions;
            datasetOptions: ViolinControllerDatasetOptions;
            defaultDataPoint: ViolinDataPoint;
            scales: keyof CartesianScaleTypeRegistry;
            metaExtensions: {};
            parsedDataType: IViolin & ChartTypeRegistry['bar']['parsedDataType'];
        };
    }
}
declare class ViolinChart<DATA extends unknown[] = ViolinDataPoint[], LABEL = string> extends Chart<'violin', DATA, LABEL> {
    static id: string;
    constructor(item: ChartItem, config: Omit<ChartConfiguration<'violin', DATA, LABEL>, 'type'>);
}

export { BoxAndWiskers, BoxPlotChart, BoxPlotController, BoxPlotControllerDatasetOptions, BoxPlotDataPoint, IBoxAndWhiskerProps, IBoxAndWhiskersOptions, IBoxPlotChartOptions, IStatsBaseOptions, IStatsBaseProps, IViolinChartOptions, IViolinElementOptions, IViolinElementProps, StatsBase$1 as StatsBase, Violin, ViolinChart, ViolinController, ViolinControllerDatasetOptions, ViolinDataPoint };
//# sourceMappingURL=index.d.ts.map
