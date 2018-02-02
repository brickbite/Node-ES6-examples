require('dotenv').config();

const { promisify } = require('util');
const https = require('https');
const getAsync = promisify(https.get);

export async function findDistance(origin, destination, departure) {
  try {
    const response = await getAsync({
      hostname: `127.0.0.1`,
      port: 443,
      method: `GET`,
      path: `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=${process.env.API_KEY}`});
    
      response.on('data', () => {
      console.log(`receiving data`);
    })
    console.log(response);

    return 1;

  } catch (err) {
    console.log(`Error in request: `, err.headers);
  }
};
