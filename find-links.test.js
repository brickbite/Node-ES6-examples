import { findLinks } from './find-links';

test('Valid dirname: returns an array', async () => {
  const result = await findLinks(`${__dirname}/website`, 'badsite');
  expect(typeof result).toBe('object');
  expect(Array.isArray.call(null, result)).toBe(true);
});

test('Valid dirname: returns an array', async () => {
  const result = await findLinks(`${__dirname}/website`, 'badsite');
  // added sort for result: async function can get results in different order
  expect(result.sort()).toEqual([`${__dirname}/website/badsite1.html`,
  `${__dirname}/website/next/another/badsite4.html`,
  `${__dirname}/website/next/badsite3.html`,
  `${__dirname}/website/badsite2.html`].sort());
});

test('Invalid dirname: returns undefined', async () => {
  expect(await findLinks(`someFakeDirectory/website`)).toBeUndefined();
});
