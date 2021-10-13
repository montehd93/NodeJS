const request = require("request");

const tokenMapbox =
  "pk.eyJ1IjoibW9udGVoZCIsImEiOiJja3Vkdmt1Z2QwM3dmMnZ0OXdiZzlxbzEyIn0._oYqhlSgRtI9hK8yB8XkQg";

//Getting API MAPBOX
const geoCode = (address, callback) => {
  let place = address;
  const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?&access_token=${tokenMapbox}&limit=1`;
  request({ url: mapBoxUrl, json: true }, (error, response) => {
    if (error) {
      console.log("ERROR: Unable to retrieve data");
    } else if (response.body.features.length === 0) {
      console.log("ERROR: Wrong parameters, please review all setings");
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0].toString(),
        longitude: response.body.features[0].center[1].toString(),
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
