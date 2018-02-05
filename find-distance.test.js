import { findDistance } from './find-distance';

test('invokes requestHandler', async (done) => {
  let called = false;
  const mockHandler = (a, b, c, d) => {
    called = true;
    expect(called).toBe(true);
    expect(d).toEqual(expect.stringContaining(' mi'));
    done();
  };
  const jestMock = jest.fn().mockImplementation(mockHandler);

  expect(called).toBe(false);

  await findDistance('Los Angeles, CA 90027, USA', 'Santa Monica, CA 90401, USA', new Date(), jestMock);
  
});

test('returns miles', async (done) => {
  let expectedVal = null;
  const mockHandler = (a,b,c,d) => {
    expectedVal = d;
    expect(expectedVal).toEqual(expect.stringContaining(' mi'));
    done();
  }
  await findDistance('Los Angeles, CA 90027, USA', 'Santa Monica, CA 90401, USA', new Date(), mockHandler);
});

test('handles dateTimes before "now"', async (done) => {
  let expectedVal = null;
  const mockHandler = (a,b,c,d) => {
    expectedVal = d;
    expect(expectedVal).toEqual(expect.stringContaining(' mi'));
    done();
  }
  await findDistance('Los Angeles, CA 90027, USA', 'Santa Monica, CA 90401, USA', new Date('December 17, 1995 03:24:00'), mockHandler);
});
