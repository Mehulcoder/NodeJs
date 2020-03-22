var fs = require('fs');

function getNotes() {
    return "Your notes...";
}

var addNote = function (title, body) {  
    var notes = loadNodes();
    var duplicateNotes = notes.filter(function (note) {  
        return note.title === title
    });

    if (duplicateNotes.length===0) {
        notes.push({
            title:title,
            body:body
        });
        console.log("New note added");
        saveNotes(notes);
    }else{
        console.log("Duplicate!! Already exists")
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};