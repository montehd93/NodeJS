const fs = require("fs");
const { title } = require("process");
const chalk = require("chalk");

const getNotes = () => {
  return `Your notes...`;
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (e) {
    return [];
  }
};
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};
const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => {
    return note.title !== title;
  });
  if (newNotes.length !== notes.length) {
    saveNotes(newNotes);
    console.log(chalk.green.inverse(`Note ${title} Removed`));
  } else {
    console.log(chalk.red.inverse(`No note found: ${title}`));
  }
};
//Módulos de exportação
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  readNote: loadNotes,
  removeNote: removeNote,
};
