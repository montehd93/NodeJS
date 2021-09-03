const validator = require("validator");

const notes = require("./notes");

console.log(notes());

console.log(validator.isURL("gmail.com"));
