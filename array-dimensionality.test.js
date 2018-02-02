import { arrayDim } from './array-dimensionality';

test('Returns a number', () => {
  expect(typeof arrayDim([])).toBe('number');
});

test('Returns 0 when not given an array', () => {
  expect(arrayDim()).toBe(0);
  expect(arrayDim('[]')).toBe(0);
  expect(arrayDim(null)).toBe(0);
  expect(arrayDim(false)).toBe(0);
});

test('Empty array is of dimension 1', () => {
  expect(arrayDim([])).toBe(1);
});

test('Array with no objects is dimension 1', () => {
  expect(arrayDim([1, 'a'])).toBe(1);
});

test('Array containing all empty arrays is of dimension 2', () => {
  expect(arrayDim([[], [], []])).toBe(2);
});

test('Array containing any number of arrays is of dimension 2', () => {
  expect(arrayDim(['a', 1, 0, []])).toBe(2);
});

test('3 dimensional array', () => {
  expect(arrayDim(['a', 1, 0, [[ ], 2], [ ]])).toBe(3);
});

test('4 dimensional array', () => {
  expect(arrayDim(['a', 1, 0, [[ ], 2, [1, ['something']]], [ ]])).toBe(4);
});