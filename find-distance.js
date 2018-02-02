require('dotenv').config();

const { promisify } = require('util');
const https = require('https');
const getAsync = promisify(https.get);

export async function findDistance(origin, destination, departure) {
  try {
    const response = await getAsync(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Victoria+BC&key=${process.env.API_KEY}`)
    
    console.log(response);

  } catch (err) {
    console.log(`Error in request: ${err}`)
  }
};
