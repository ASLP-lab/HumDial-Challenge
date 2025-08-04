/**
 * @sgratzl/boxplots
 * https://github.com/sgratzl/boxplots
 *
 * Copyright (c) 2021 Samuel Gratzl <sam@sgratzl.com>
 */

declare type KernelDensityEstimator = (v: number) => number;
declare function kde(stats: {
    items: ArrayLike<number>;
    iqr: number;
    variance: number;
}): KernelDensityEstimator;

interface IBoxPlot {
    /**
     * minimum value in the given data
     */
    readonly min: number;
    /**
     * maximum value in the given data
     */
    readonly max: number;
    /**
     * median value in the given data
     */
    readonly median: number;
    /**
     * 25% quantile
     */
    readonly q1: number;
    /**
     * 75% quantile
     */
    readonly q3: number;
    /**
     * inter quantile range (q3 - q1)
     */
    readonly iqr: number;
    /**
     * whisker / fence below the 25% quantile (lower one)
     * by default is computed as the smallest element that satisfies (e >= q1 - 1.5IQR && e <= q1)
     */
    readonly whiskerLow: number;
    /**
     * whisker / fence above the 75% quantile (upper one)
     * by default is computed as the largest element that satisfies (e <= q3 + 1.5IQR && e >= q1)
     */
    readonly whiskerHigh: number;
    /**
     * outliers that are outside of the whiskers on both ends
     */
    readonly outlier: readonly number[];
    /**
     * arithmetic mean
     */
    readonly mean: number;
    /**
     * variance
     */
    readonly variance: number;
    /**
     * number of missing values (NaN, null, undefined) in the data
     */
    readonly missing: number;
    /**
     * number of values (valid + missing)
     */
    readonly count: number;
    /**
     * array like (array or typed array) of all valid items
     */
    readonly items: ArrayLike<number>;
    readonly kde: KernelDensityEstimator;
}
declare interface QuantileMethod {
    (arr: ArrayLike<number>, length: number): {
        q1: number;
        median: number;
        q3: number;
    };
}
declare type BoxplotStatsOptions = {
    /**
     * specify the coefficient for the whiskers, use <=0 for getting min/max instead
     * the coefficient will be multiplied by the IQR
     * @default 1.5
     */
    coef?: number;
    /**
     * specify the quantile method to use
     * @default quantilesType7
     */
    quantiles?: QuantileMethod;
    /**
     * defines that it can be assumed that the array is sorted and just contains valid numbers
     * (which will avoid unnecessary checks and sorting)
     * @default false
     */
    validAndSorted?: boolean;
    /**
     * whiskers mode whether to compute the nearest element which is bigger/smaller than low/high whisker or
     * the exact value
     * @default 'nearest'
     */
    whiskersMode?: 'nearest' | 'exact';
    /**
     * delta epsilon to compare
     * @default 10e-3
     */
    eps?: number;
};
declare function boxplot(data: readonly number[] | Float32Array | Float64Array, options?: BoxplotStatsOptions): IBoxPlot;

interface QuantilesResult {
    q1: number;
    median: number;
    q3: number;
}
/**
 * computes the boxplot stats using the given interpolation function if needed
 * @param {number[]} arr sorted array of number
 * @param {(i: number, j: number, fraction: number)} interpolate interpolation function
 */
declare function quantilesInterpolate(arr: ArrayLike<number>, length: number, interpolate: (i: number, j: number, fraction: number) => number): QuantilesResult;
/**
 * Uses R's quantile algorithm type=7.
 * https://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population
 */
declare function quantilesType7(arr: ArrayLike<number>, length?: number): QuantilesResult;
/**
 * ‘linear’: i + (j - i) * fraction, where fraction is the fractional part of the index surrounded by i and j.
 * (same as type 7)
 */
declare function quantilesLinear(arr: ArrayLike<number>, length?: number): QuantilesResult;
/**
 * ‘lower’: i.
 */
declare function quantilesLower(arr: ArrayLike<number>, length?: number): QuantilesResult;
/**
 * 'higher': j.
 */
declare function quantilesHigher(arr: ArrayLike<number>, length?: number): QuantilesResult;
/**
 * ‘nearest’: i or j, whichever is nearest
 */
declare function quantilesNearest(arr: ArrayLike<number>, length?: number): QuantilesResult;
/**
 * ‘midpoint’: (i + j) / 2
 */
declare function quantilesMidpoint(arr: ArrayLike<number>, length?: number): QuantilesResult;
/**
 * The hinges equal the quartiles for odd n (where n <- length(x))
 * and differ for even n. Whereas the quartiles only equal observations
 * for n %% 4 == 1 (n = 1 mod 4), the hinges do so additionally
 * for n %% 4 == 2 (n = 2 mod 4), and are in the middle of
 * two observations otherwise.
 */
declare function quantilesFivenum(arr: ArrayLike<number>, length?: number): QuantilesResult;
/**
 * alias for quantilesFivenum
 * @param arr
 * @param length
 */
declare function quantilesHinges(arr: ArrayLike<number>, length?: number): QuantilesResult;

export { BoxplotStatsOptions, IBoxPlot, KernelDensityEstimator, QuantileMethod, QuantilesResult, boxplot, boxplot as default, kde, quantilesFivenum, quantilesHigher, quantilesHinges, quantilesInterpolate, quantilesLinear, quantilesLower, quantilesMidpoint, quantilesNearest, quantilesType7 };
//# sourceMappingURL=index.d.ts.map
