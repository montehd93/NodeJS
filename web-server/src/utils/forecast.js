const request = require("request");
const geocode = require("./geocode");
const key = "afc55c2bebd141ba4cc5b62497d814b9";
let historicalDate = "2020-09-25";
const historical = `&historical_date=${historicalDate}`;

const forecast = (latitude, longitude, location, callback) => {
  //teste
  const url = `http://api.weatherstack.com/current?access_key=${key}&query=${longitude},${latitude}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to retrieve data", undefined);
    } else if (body.error) {
      callback(`ERROR: ${body.error.state.info}`, undefined);
    } else {
      callback(
        undefined,
        `${location}, ${body.location.localtime}, ${body.current.weather_descriptions} it's currently ${body.current.temperature} degrees and feels like ${body.current.feelslike} degrees`
      );
    }
  });
};

module.exports = forecast;
