import { arrayDim } from './arrayDimensionality';

test('Empty array is of dimension 1', () => {
  expect(arrayDim([])).toBe(1);
});

test('Array with no objects is dimension 1', () => {
  expect(arrayDim([1, 'a'])).toBe(1);
});

test('Array containing arrays is of dimension 2', () => {
  expect(arrayDim([[], [], []])).toBe(2);
});

test('Array containing an array is of dimension 2', () => {
  expect(arrayDim(['a', 1, 0, []])).toBe(2);
});


