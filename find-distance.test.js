import { findDistance } from './find-distance';

test('returns miles', async () => {
  expect(await findDistance()).toBe(1);
});

// test('returns correct number of miles', () => {
//   expect(findDistance()).toBe(1);
// });
