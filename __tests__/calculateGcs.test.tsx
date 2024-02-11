import { calculateGcs } from '../src/lib/math';
import { expect, test } from 'vitest';

test('returns the sum of all three arguments (e, v, m)', () => {
  expect(calculateGcs(4, 5, 6)).toEqual(15);
  expect(calculateGcs(1, 1, 1)).toEqual(3);
  expect(calculateGcs(3, 4, 5)).toEqual(12);
});
