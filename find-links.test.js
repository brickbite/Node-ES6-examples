import { findLinks } from './find-links';

test('Valid dirname: returns an array', async () => {
  const result = await findLinks(`${__dirname}/website`, 'badsite');
  expect(typeof result).toBe('object');
  expect(Array.isArray.call(null, result)).toBe(true);
});

test('Valid dirname: returns an array', async () => {
  const result = await findLinks(`${__dirname}/website`, 'badsite');
  expect(result).toEqual([ './website/main.html',
  './website/next/3/asdf.html',
  './website/next/something.html',
  './website/second.html' ]);
});

test('Invalid dirname: returns undefined', async () => {
  expect(await findLinks(`someFakeDirectory/website`)).toBeUndefined();
});
