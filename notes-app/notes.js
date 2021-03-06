var fs = require('fs');
var chalk = require('chalk');

function getNotes() {
    return "Your notes...";
}

var addNote = function (title, body) {  
    var notes = loadNodes();

    var duplicateNote = notes.find(function (note) {  
        return note.title === title;
    });

    if (!duplicateNote) {
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
};

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

var listNotes = () => {
    var notes = loadNodes();

    console.log(chalk.inverse("Your notes"));

    notes.forEach(note => {
        console.log(note.title);
    });
};

var readNote = function(title){
    var notes = loadNodes();
    var foundNote = notes.find(function (note) {  
        return note.title === title;
    });

    if (foundNote!=undefined) {
        console.log(foundNote);
    }else{
        console.log("Item has not been found");
    }

    // console.log("hello");
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
};