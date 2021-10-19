const request = require("request");

const tokenMapbox =
  "pk.eyJ1IjoibW9udGVoZCIsImEiOiJja3Vkdmt1Z2QwM3dmMnZ0OXdiZzlxbzEyIn0._oYqhlSgRtI9hK8yB8XkQg";

//Getting API MAPBOX
const geoCode = (place, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?&access_token=${tokenMapbox}&limit=1`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      console.log("ERROR: Unable to retrieve data");
    } else if (body.features.length === 0) {
      console.log("ERROR: Wrong parameters, please review all setings");
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0].toString(),
        longitude: body.features[0].center[1].toString(),
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
