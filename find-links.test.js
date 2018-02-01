import { findLinks } from './find-links';

test('Finds a link inside a file', async () => {
  expect(await findLinks()).toBe(1);
});

test('Finds multiple links inside a file', async () => {
  expect(await findLinks()).toBe(1);
});

test('Finds links from multiple files', async () => {
  expect(await findLinks()).toBe(1);
});
