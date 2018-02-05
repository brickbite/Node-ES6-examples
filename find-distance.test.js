import { findDistance } from './find-distance';

test('invokes requestHandler', () => {
  const mockHandler = () => { return }
  await findDistance('Los Angeles, CA 90027, USA', 'Santa Monica, CA 90401, USA', 'now', mockHandler);
  expect(mockHandler).toHaveBeenCalled();
});

// test('returns miles', async () => {
//   const expectedVal = null;
//   const mockHandler = (a,b,c,d) => {
//     expectedVal = d;
//   }
//   await findDistance('Los Angeles, CA 90027, USA', 'Santa Monica, CA 90401, USA', 'now', mockHandler);
//   expect(expectedVal).toBe('21.6 mi');
// });

// test('handles dateTimes before "now"', async () => {
//   const expectedVal = null;
//   const mockHandler = (a,b,c,d) => {
//     expectedVal = d;
//   }
//   await findDistance('Los Angeles, CA 90027, USA', 'Santa Monica, CA 90401, USA', new Date('December 17, 1995 03:24:00'), mockHandler);
//   expect(expectedVal).toBe('21.6 mi');
// });
