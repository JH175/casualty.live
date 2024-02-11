import { calculateMap } from '../src/lib/math';
import { expect, test } from 'vitest';

test('returns MAP = 1/3*(SBP) + 2/3*(DBP)', () => {
  expect(calculateMap(120, 80)).toEqual(93);
  expect(calculateMap(100, 60)).toEqual(73);
  expect(calculateMap(200, 100)).toEqual(133);
});
