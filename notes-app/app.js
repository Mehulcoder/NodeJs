var validator = require('validator');
var chalk = require('chalk');
var notes = require('./notes');
var yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add note to the notes array',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },

        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {  
        notes.addNote(argv.title, argv.body);
    }
});
yargs.command({
    command: 'remove',
    describe: 'Remove note from the notes array',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {  
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'listNotes',
    describe: 'List all the Notes',
    handler(){
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'read the query note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

yargs.parse();