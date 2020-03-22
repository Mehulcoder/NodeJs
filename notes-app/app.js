const validator = require('validator');
const chalk = require('chalk');
var getNotes = require('./notes');
const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'list',
    describe: 'List all the stuff',
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
    handler: function (argv) {  
        console.log("Title: "+argv.title);
        console.log("Body: "+argv.body);
    }
})

yargs.parse();