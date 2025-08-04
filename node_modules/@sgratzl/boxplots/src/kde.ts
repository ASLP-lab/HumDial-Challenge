const HELPER = Math.sqrt(2 * Math.PI);

// See <http://en.wikipedia.org/wiki/Kernel_(statistics)>.
function gaussian(u: number) {
  return Math.exp(-0.5 * u * u) / HELPER;
}

function toSampleVariance(variance: number, len: number) {
  return (variance * len) / (len - 1);
}

/**
 *
 * The ["normal reference distribution"
 * rule-of-thumb](https://stat.ethz.ch/R-manual/R-devel/library/MASS/html/bandwidth.nrd.html),
 * a commonly used version of [Silverman's
 * rule-of-thumb](https://en.wikipedia.org/wiki/Kernel_density_estimation#A_rule-of-thumb_bandwidth_estimator).
 */
function nrd(iqr: number, variance: number, len: number) {
  let s = Math.sqrt(toSampleVariance(variance, len));
  if (typeof iqr === 'number') {
    s = Math.min(s, iqr / 1.34);
  }
  return 1.06 * s * Math.pow(len, -0.2);
}

export type KernelDensityEstimator = (v: number) => number;

export default function kde(stats: {
  items: ArrayLike<number>;
  iqr: number;
  variance: number;
}): KernelDensityEstimator {
  const len = stats.items.length;
  const bandwidth = nrd(stats.iqr, stats.variance, len);

  return (x: number) => {
    let i = 0;
    let sum = 0;
    for (i = 0; i < len; i++) {
      const v = stats.items[i];
      sum += gaussian((x - v) / bandwidth);
    }
    return sum / bandwidth / len;
  };
}
