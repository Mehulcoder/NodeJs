const validator = require('validator');
const chalk = require('chalk');
var getNotes = require('./notes');
const yargs = require('yargs');

yargs.command({
    command: 'list',
    description: 'List all the stuff',
    builder
    handler: function () {  
        console.log("Listing all the stuff");
    }
})


// var command = process.argv[2];

console.log(yargs.argv); 