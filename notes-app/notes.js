const fs = require('fs');
const getNotes = () => {
    return 'Your notes...';
}

const addNote = (title, body) => {  
    console.log('Title: ' + title);
    console.log('Body: ' + body);
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    if (duplicateNotes.length === 0) {
        notes.push({    
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title;
    });
    if (notes.length > notesToKeep.length) {
        console.log('Note removed');
        saveNotes(notesToKeep);
    } else {
        console.log('No note found');
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log('Your notes:');
    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(note.body);
    } else {
        console.log('Note not found');
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    loadNotes : loadNotes,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
};

