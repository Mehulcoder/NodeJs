var fs = require('fs');
var chalk = require('chalk');

function getNotes() {
    return "Your notes...";
}

var addNote = function (title, body) {  
    var notes = loadNodes();
    var duplicateNotes = notes.filter(function (note) {  
        return note.title === title;
    });

    if (duplicateNotes.length===0) {
        notes.push({
            title:title,
            body:body
        });
        console.log(chalk.green("New note added"));
        saveNotes(notes);
    }else{
        console.log(chalk.redBright("Duplicate!! Already exists"));
    }
    
    
};

var saveNotes = function (notes) {  
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

var loadNodes = function () {
    try {
        var dataBuffer = fs.readFileSync('notes.json');
        var dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

var removeNote = function (title) {  
    var notes = loadNodes();
    var foundNote = notes.filter(function (note) {
        return note.title === title;
    });

    var index = 0;
    if (foundNote.length===0) {
        console.log(chalk.bgRedBright("Element not found!"));
    }else{
        foundNote.forEach(element => {
            index = notes.indexOf(element);
            notes.splice(index, 1);
            saveNotes(notes);
            console.log(chalk.bgGreen.redBright("Element Removed"));
        });
    }

    
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};