const http = require("http");
const key = "afc55c2bebd141ba4cc5b62497d814b9";

const url = `http://api.weatherstack.com/current?access_key=${key}&query=Piracicaba`;
const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    //
    data = data + chunk.toString();
  });
  response.on("end", () => {
    //
    console.log(JSON.parse(data));
  });
});
request.on("error", (e) => {
  console.log("An error", error);
});

request.end();
