const fs = require("fs");
const { title } = require("process");

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
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};
const removeNote = (title) => {
  const notes = loadNotes();
  console.log(notes);
  for ([i, title] of Object.entries(notes)) {
    delete notes[i];
    console.log(title, notes);
    saveNotes(notes);
  }
};
//Módulos de exportação
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  readNote: loadNotes,
  removeNote: removeNote,
};
