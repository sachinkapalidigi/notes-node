const fs = require('fs');

const _=require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

var title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
var body = {
  describe:'Body of note',
  demand:true,
  alias:'b'
};
const argv= yargs
.command('add','Add a new note',{
  title,
  body
})
.command('list','List all notes')
.command('read','Read a Note',{
  title
})
.command('remove','Remove a Note',{
  title
})
.help()
.argv;
//console log argv : find that sirst element is _ which is an array where 0th element is the cmmnd that we give
var command = argv._[0];

if(command === 'add'){

  var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log("Note successfully added");
    notes.logNote(note);
  }else {
    console.log("Duplicate Title exits");
  }
}else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note)=>notes.logNote(note));

}else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log(`Note found`);
    notes.logNote(note);
  }else {
    console.log(`note not found`);
  }
}else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved?'Note removed':'Note not found';
  console.log(message);
}else{
  console.log('command not recog');
}
