const { promisify } = require('util');
const https = require('https');
const getAsync = promisify(https.get);

export async function findDistance(origin, destination, departure) {
  return 1;
};
