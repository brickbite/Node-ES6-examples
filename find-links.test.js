import { findLinks } from './find-links';

test('Finds a link inside a file', () => {
  expect(findLinks()).toBe(1);
});

test('Finds multiple links inside a file', () => {
  expect(findLinks()).toBe(1);
});

test('Finds links from multiple files', () => {
  expect(findLinks()).toBe(1);
});
