/// <reference types="jest" />

import {
  quantilesType7,
  quantilesFivenum,
  quantilesLinear,
  quantilesHigher,
  quantilesLower,
  quantilesNearest,
  quantilesMidpoint,
} from './quantiles';

function asc(a: number, b: number) {
  return a - b;
}

describe('quantiles', () => {
  describe('11', () => {
    const arr = [
      -0.402253, -1.4521869, 0.135228, -1.8620118, -0.5687531, 0.4218371, -1.1165662, 0.5960255, -0.5008038, -0.394178,
      1.3709885,
    ].sort(asc);
    it('type7', () => {
      const r = quantilesType7(arr);
      expect(r.q1).toBeCloseTo(-0.84265965);
      expect(r.median).toBeCloseTo(-0.402253);
      expect(r.q3).toBeCloseTo(0.27853255);
    });
    it('fivenum', () => {
      const r = quantilesFivenum(arr);
      expect(r.q1).toBeCloseTo(-0.84265965);
      expect(r.median).toBeCloseTo(-0.402253);
      expect(r.q3).toBeCloseTo(0.27853255);
    });
  });
  describe('12', () => {
    const arr = [
      1.086657167, 0.294672807, 1.462293013, 0.485641706, 1.57748264, 0.827809286, -0.397192557, -1.222111542,
      1.071236583, -1.182959319, -0.003749222, -0.360759239,
    ].sort(asc);
    it('type7', () => {
      const r = quantilesType7(arr);
      expect(r.q1).toBeCloseTo(-0.3698675685);
      expect(r.median).toBeCloseTo(0.3901572565);
      expect(r.q3).toBeCloseTo(1.075091729);
    });
    it('fivenum', () => {
      const r = quantilesFivenum(arr);
      expect(r.q1).toBeCloseTo(-0.378975898);
      expect(r.median).toBeCloseTo(0.3901572565);
      expect(r.q3).toBeCloseTo(1.078946875);
    });
  });

  describe('5', () => {
    const arr = [0, 25, 51, 75, 99].sort(asc);
    it('type7', () => {
      const r = quantilesType7(arr);
      expect(r.q1).toBeCloseTo(25);
      expect(r.median).toBeCloseTo(51);
      expect(r.q3).toBeCloseTo(75);
    });
    it('fivenum', () => {
      const r = quantilesFivenum(arr);
      expect(r.q1).toBeCloseTo(25);
      expect(r.median).toBeCloseTo(51);
      expect(r.q3).toBeCloseTo(75);
    });
  });

  describe('strange', () => {
    const arr = [18882.492, 7712.077, 5830.748, 7206.05].sort(asc);
    it('type7', () => {
      const r = quantilesType7(arr);
      expect(r.q1).toBeCloseTo(6862.2245);
      expect(r.median).toBeCloseTo(7459.0635);
      expect(r.q3).toBeCloseTo(10504.68075);
    });
    it('fivenum', () => {
      const r = quantilesFivenum(arr);
      expect(r.q1).toBeCloseTo(6518.398999999999);
      expect(r.median).toBeCloseTo(7459.0635);
      expect(r.q3).toBeCloseTo(13297.2845);
    });
  });

  describe('numpy interpolation', () => {
    const arr = [3.375, 3.75, 3.875, 3, 3, 3.5, 3.125, 3, 2.625, 3.375, 3].sort(asc);
    it('linear', () => {
      expect(quantilesLinear(arr).q3).toBe(3.4375);
    });
    it('higher', () => {
      expect(quantilesHigher(arr).q3).toBe(3.5);
    });
    it('lower', () => {
      expect(quantilesLower(arr).q3).toBe(3.375);
    });
    it('nearest', () => {
      expect(quantilesNearest(arr).q3).toBe(3.5);
    });
    it('midpoint', () => {
      expect(quantilesMidpoint(arr).q3).toBe(3.4375);
    });
  });
});
