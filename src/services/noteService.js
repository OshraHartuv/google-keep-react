import { storageService } from './asyncService.js';
import { getDateStr, makeId } from './utilService.js';

export const noteService = {
    query,
    removeNote,
    getEmptyNote,
    getById,
    save,
};

const STORAGE_KEY = 'notes';

const gDefaultNotes = [
   
];

var gNotes = _loadNotes();

function query(filterBy) {
    let notesToReturn = gNotes;
    if (filterBy) {
        var { text } = filterBy
        const regex = new RegExp(text, 'i')
        // maxBatteryStatus = maxBatteryStatus || Infinity
        // minBatteryStatus = minBatteryStatus || 0
        notesToReturn = gNotes.filter((note) => regex.test(note.title))
    }

    // let bugs = gBugs.filter((bug) => regex.test(bug.title))
    console.log('notesToReturn ',notesToReturn);
    return Promise.resolve([...notesToReturn]);
}

function removeNote(noteId) {
    const idx = gNotes.findIndex(
        (note) => noteId === note._id
    );
    gNotes.splice(idx, 1);
    if (!gNotes.length) gNotes = gDefaultNotes.slice();
    storageService.store(STORAGE_KEY, gNotes);
    return Promise.resolve();
}

function getEmptyNote() {
    return {
        title: '',
        amount: 0,
        currency: 'ILS',
        time: Date.now(),
    };
}

function getById(id) {
    const note = gNotes.find(
        (note) => note._id === id
    );
    return Promise.resolve({ ...note });
}

function save(noteToSave) {
    noteToSave.time = +noteToSave.time
    if (noteToSave._id) {
        const idx = gNotes.findIndex(
            (note) => note._id === noteToSave._id
        );
        gNotes.splice(idx, 1, noteToSave);
    } else {
        noteToSave._id = makeId();
        noteToSave.createdAt = Date.now();
        gNotes.push(noteToSave);
    }
    storageService.store(STORAGE_KEY, gNotes);
    return Promise.resolve(noteToSave);
}


async function _loadNotes() {
    let Notes = await storageService.query(STORAGE_KEY);
    if (!Notes || !Notes.length) Notes = gDefaultNotes;
    return await storageService.postMany(STORAGE_KEY, Notes);
}
