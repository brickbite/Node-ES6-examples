require('dotenv').config();

const { promisify } = require('util');
const https = require('https');
const getAsync = promisify(https.get);

export async function findDistance(origin = `Santa Monica, CA 90401`, destination = `Los Angeles, CA 90027`, departure = new Date()) {

  departure = Math.round(departure.getTime() / 1000);

  try {
    const response = await getAsync({
      hostname: `maps.googleapis.com`,
      path: `/maps/api/distancematrix/json?units=imperial&origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&departure_time=${encodeURIComponent(departure)}&key=${process.env.API_KEY}`
    });
    
    // response.on('data', () => {
    //   console.log(`receiving data`);
    // })
    // console.log(response);

    return 1;
    
  } catch (err) {

    console.log(`Error. Response Status: `, err.statusCode);
    // console.log(`Error Headers: `, err.headers);
    // console.log(`Error: `, err);

    let response = '';
    
    err.on('data', (data) => {
      response += data;
    });
    
    err.on('end', () => {
      console.log('======== data end:', response);
      response = JSON.parse(response);
    });
    
    return 1;
  }
};

// console.log(findDistance());