const fs = require("fs");
const { title } = require("process");
const chalk = require("chalk");

const getNotes = () => `Your notes...`;

const saveNotes = (notes) =>
  fs.writeFileSync("notes.json", JSON.stringify(notes));

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (e) {
    return [];
  }
};
const reload = loadNotes(); //carregamento unico das notas, para evitar repetição do mesmo
const addNote = (title, body) => {
  const reload = loadNotes();
  const duplicateNotes = reload.find((note) => note.title === title);
  if (!duplicateNotes) {
    reload.push({
      title: title,
      body: body,
    });
    saveNotes(reload);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};
const removeNote = (title) => {
  const newNotes = reload.filter((note) => note.title !== title);
  if (newNotes.length !== reload.length) {
    saveNotes(newNotes);
    console.log(chalk.green.inverse(`Note ${title} Removed`));
  } else {
    console.log(chalk.red.inverse(`No note found: ${title}`));
  }
};

const listNote = () => {
  console.log(chalk.inverse("Your notes"));
  reload.forEach((e, i) => {
    console.log(`${i + 1}: ${e.title}`);
  });
};
const readNote = (title) => {
  const read = reload.find((e) => e.title === title);
  if (read) {
    console.log(chalk.inverse.yellowBright(read.title));
    console.log(read.body);
  } else console.log(chalk.red.inverse("ERROR !!"));
};
//Módulos de exportação
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  readNote: readNote,
  listNote: listNote,
  removeNote: removeNote,
};
