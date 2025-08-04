/// <reference types="jest" />

import boxplot from './boxplot';

describe('boxplot', () => {
  test('is a function', () => {
    expect(typeof boxplot).toBe('function');
  });
  test('simple', () => {
    const arr = [
      -0.402253, -1.4521869, 0.135228, -1.8620118, -0.5687531, 0.4218371, -1.1165662, 0.5960255, -0.5008038, -0.394178,
      1.3709885,
    ];
    const b = boxplot(arr);
    expect(b.min).toBeCloseTo(-1.8620118);
    expect(b.q1).toBeCloseTo(-0.84265965);
    expect(b.median).toBeCloseTo(-0.402253);
    expect(b.q3).toBeCloseTo(0.27853255);
    expect(b.max).toBeCloseTo(1.3709885);
    expect(b.missing).toBe(0);
  });

  test('missing', () => {
    const arr: number[] = [
      NaN,
      -0.402253,
      -1.4521869,
      0.135228,
      -1.8620118,
      undefined,
      0.4218371,
      -1.1165662,
      null,
      -0.5008038,
      -0.394178,
      1.3709885,
    ] as number[];
    const b = boxplot(arr);
    expect(b.missing).toBe(3);
    expect(b.count).toBe(arr.length);
    expect(b.items).toHaveLength(arr.length - 3);
  });

  test('only missing', () => {
    const arr: number[] = [NaN, NaN, NaN];
    const b = boxplot(arr);
    expect(b.mean).toBeNaN();
    expect(b.missing).toBe(3);
    expect(b.count).toBe(arr.length);
    expect(b.items).toHaveLength(0);
  });
});
