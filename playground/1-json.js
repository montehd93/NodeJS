const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJson = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJson);

// const dataBuffer = fs.readFileSync("1-json.json");

// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data);

/*
Challenge: Wor with JSON and the file System.

1. Load and parse the JSON data
2. Change the name and age property using your info
3. Stringify the changed object and overwrite the original data
4. Test your work by viewing data in the JSON file

*/

let recieveData = JSON.parse(fs.readFileSync("1-json.json").toString());
console.log(recieveData);
recieveData.name = "Hugo";
recieveData.age = 28;
console.log(recieveData);
fs.writeFileSync("1-json.json", JSON.stringify(recieveData));
