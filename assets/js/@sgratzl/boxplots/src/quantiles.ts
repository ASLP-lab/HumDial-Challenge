export interface QuantilesResult {
  q1: number;
  median: number;
  q3: number;
}

/**
 * computes the boxplot stats using the given interpolation function if needed
 * @param {number[]} arr sorted array of number
 * @param {(i: number, j: number, fraction: number)} interpolate interpolation function
 */
export function quantilesInterpolate(
  arr: ArrayLike<number>,
  length: number,
  interpolate: (i: number, j: number, fraction: number) => number
): QuantilesResult {
  const n1 = length - 1;
  const compute = (q: number) => {
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

/**
 * Uses R's quantile algorithm type=7.
 * https://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population
 */
export function quantilesType7(arr: ArrayLike<number>, length = arr.length): QuantilesResult {
  return quantilesInterpolate(arr, length, (a, b, alpha) => a + alpha * (b - a));
}

/**
 * ‘linear’: i + (j - i) * fraction, where fraction is the fractional part of the index surrounded by i and j.
 * (same as type 7)
 */
export function quantilesLinear(arr: ArrayLike<number>, length = arr.length): QuantilesResult {
  return quantilesInterpolate(arr, length, (i, j, fraction) => i + (j - i) * fraction);
}

/**
 * ‘lower’: i.
 */
export function quantilesLower(arr: ArrayLike<number>, length = arr.length): QuantilesResult {
  return quantilesInterpolate(arr, length, (i) => i);
}

/**
 * 'higher': j.
 */
export function quantilesHigher(arr: ArrayLike<number>, length = arr.length): QuantilesResult {
  return quantilesInterpolate(arr, length, (_, j) => j);
}

/**
 * ‘nearest’: i or j, whichever is nearest
 */
export function quantilesNearest(arr: ArrayLike<number>, length = arr.length): QuantilesResult {
  return quantilesInterpolate(arr, length, (i, j, fraction) => (fraction < 0.5 ? i : j));
}

/**
 * ‘midpoint’: (i + j) / 2
 */
export function quantilesMidpoint(arr: ArrayLike<number>, length = arr.length): QuantilesResult {
  return quantilesInterpolate(arr, length, (i, j) => (i + j) * 0.5);
}

/**
 * The hinges equal the quartiles for odd n (where n <- length(x))
 * and differ for even n. Whereas the quartiles only equal observations
 * for n %% 4 == 1 (n = 1 mod 4), the hinges do so additionally
 * for n %% 4 == 2 (n = 2 mod 4), and are in the middle of
 * two observations otherwise.
 */
export function quantilesFivenum(arr: ArrayLike<number>, length = arr.length): QuantilesResult {
  // based on R fivenum
  const n = length;

  // assuming R 1 index system, so arr[1] is the first element
  const n4 = Math.floor((n + 3) / 2) / 2;
  const compute = (d: number) => 0.5 * (arr[Math.floor(d) - 1] + arr[Math.ceil(d) - 1]);

  return {
    q1: compute(n4),
    median: compute((n + 1) / 2),
    q3: compute(n + 1 - n4),
  };
}

/**
 * alias for quantilesFivenum
 * @param arr
 * @param length
 */
export function quantilesHinges(arr: ArrayLike<number>, length = arr.length): QuantilesResult {
  return quantilesFivenum(arr, length);
}
