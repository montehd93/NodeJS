//Requires
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;
const ourVersion = require("../package.json");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//Set directories
const public = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setting parameters
app.use(express.static(public));

//Setup handlebars
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Hugo Monteiro",
    version: ourVersion.version,
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    body: "How can we help your day",
  });
});
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You need provide an address",
    });
  }
  geocode(req.query.address, (e, { latitude, longitude, location } = {}) => {
    if (e) {
      return res.send({ e });
    }
    forecast(latitude, longitude, location, (e, data) => {
      if (e) {
        return res.send({
          e,
        });
      }
      return res.send({
        weather: data,
        location,
        address: req.query.address,
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("help", {
    title: "Help page",
    body: "Help article not found",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "Not found page",
  });
});
app.listen(port, () => {
  console.log("Server is on");
});
