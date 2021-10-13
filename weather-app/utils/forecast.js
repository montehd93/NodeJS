const request = require("request");
const geocode = require("./geocode");
const key = "afc55c2bebd141ba4cc5b62497d814b9";
let historicalDate = "2020-09-25";
const historical = `&historical_date=${historicalDate}`;

const forecast = (latitude, longitude, location, callback) => {
  //teste
  const urlCurrent = `http://api.weatherstack.com/current?access_key=${key}&query=${longitude},${latitude}`;
  request({ url: urlCurrent, json: true }, (error, response) => {
    state = response.body.error;
    if (error) {
      callback("Unable to retrieve data", undefined);
    } else if (state) {
      callback(`ERROR: ${state.info}`, undefined);
    } else {
      callback(
        undefined,
        `${location}, ${response.body.location.localtime}, ${response.body.current.weather_descriptions} it's currently ${response.body.current.temperature} degrees and feels like ${response.body.current.feelslike} degrees`
      );
    }
  });
};

module.exports = forecast;
