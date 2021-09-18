const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes");

/*
Challenge

1. Setup the remove commando to take a required "--title" option
2. Create and export a removeNote function from note.js
3. Call removeNote in remove command handler
4. Have removeNote log the tittle of the note to be removed
5. Test your work using: note add.js remove --title='some title'

*/
//Customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});
//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});
//create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading note");
  },
});
//create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("List all notes");
  },
});

yargs.parse();
//Challenge
/*
Challenge: Add an option to yargs
1. Setup a body option for the add command
2. Configure a description, make it required, and for it to be a string
3. Log the body value in the handler function
4. Test

// console.log(yargs.argv);
/*
// const command = process.argv[2].toLocaleLowerCase();

// if (command == "add") {
//   console.log(`Add notes ${process.argv[3]}`);
// } else if (command === "remove") {  
//   console.log(`Remove notes ${process.argv[3]}`);
// }


console.log(notes());

console.log(validator.isURL("gmail.com"));


Challenge: use the chalk library in your project

1. Install version 2.4.1 of chalk
2. Load chalk into app.js
3. Use it to print the string "Sucess!" to the console in green
4. Test your work
BONUS: Make text bold and inversed.

console.log(`Green: ${chalk.green("Sucess!")}`);
console.log(`Green and bold: ${chalk.green.bold("Sucess!")}`);
console.log(
  `Green and bold and inversed: ${chalk.green.inverse.bold("Sucess!")} `
);

console.log(process.argv[2]);
*/
