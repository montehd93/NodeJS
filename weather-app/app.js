("use strict");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const location = process.argv[2];

if (!location) {
  console.log("Please provide an address");
} else {
  geocode(location, (e, { latitude, longitude, location } = {}) => {
    if (e) {
      return console.log(e);
    }
    forecast(latitude, longitude, location, (e, data) => {
      if (e) {
        return console.log(e);
      }
      return console.log(data);
    });
  });
}

/*
UPDATE: with weatherStack(NEW)

console.log(data.current) to get the right information

key afc55c2bebd141ba4cc5b62497d814b9
base URL: http://api.weatherstack.com/

// Current Weather API Endpoint

http://api.weatherstack.com/current
    ? access_key = YOUR_ACCESS_KEY
    & query = New York

// Historical Weather API Endpoint

http://api.weatherstack.com/historical
    ? access_key = YOUR_ACCESS_KEY
    & query = New York
    & historical_date = 2015-21-01

// optional parameters: 

    & hourly = 1
    & interval = 3
    & units = m
    & language = en
    & callback = MY_CALLBACK

// Historical Weather Time-Series:

http://api.weatherstack.com/historical
    ? access_key = YOUR_ACCESS_KEY
    & query = New York
    & historical_date_start = 2015-10-21
    & historical_date_end = 2015-10-25
    
// optional parameters: 

    & hourly = 1
    & interval = 3
    & units = m
    & language = en
    & callback = MY_CALLBACK
    
// Weather Forecast API Endpoint

http://api.weatherstack.com/forecast
    ? access_key = YOUR_ACCESS_KEY
    & query = New York
    
// optional parameters: 

    & forecast_days = 7
    & hourly = 1
    & interval = 3
    & units = m
    & language = en
    & callback = MY_CALLBACK
    
*/
