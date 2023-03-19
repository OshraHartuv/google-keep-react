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
    {
        _id: 'n101',
        createdAt: 1112222,
        type: 'note-txt',
        isPinned: true,
        style: {
            backgroundColor: '#00d',
        },
        info: {
            txt: 'Fullstack Me Baby!',
        },
    },
    {
        _id: 'n102',
        type: 'note-img',
        isPinned: false,
        info: {
            url: 'http://some-img/me',
            title: 'Bobi and Me',
        },
        style: {
            backgroundColor: '#00d',
        },
    },
    {
        _id: 'n103',
        type: 'note-todos',
        isPinned: false,
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving liscence', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 },
            ],
        },
    },
    {
        _id: 'n104',
        createdAt: 1112222,
        type: 'note-txt',
        isPinned: true,
        style: {
            backgroundColor: '#00d',
        },
        info: {
            txt: 'Fullstack Me Baby!',
        },
    },
    {
        _id: 'n105',
        type: 'note-img',
        isPinned: false,
        info: {
            url: 'http://some-img/me',
            title: 'Bobi and Me',
        },
        style: {
            backgroundColor: '#00d',
        },
    },
    {
        _id: 'n106',
        type: 'note-todos',
        isPinned: false,
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving liscence', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 },
            ],
        },
    },
];

_loadNotes();

async function query(filterBy) {
    let notes = await storageService.query(STORAGE_KEY);
    if (filterBy) {
        var { text } = filterBy;
        const regex = new RegExp(text, 'i');
        notes = notes.filter((note) => regex.test(note.title));
    }
    return JSON.parse(JSON.stringify(notes));
}

function removeNote(id) {
    return storageService.remove(STORAGE_KEY, id);
    // const idx = gNotes.findIndex((note) => noteId === note._id);
    // gNotes.splice(idx, 1);
    // if (!gNotes.length) gNotes = JSON.parse(JSON.stringify(gDefaultNotes));
    // storageService.store(STORAGE_KEY, gNotes);
    // return Promise.resolve();
}

function getEmptyNote() {
    return {
        title: '',

        createdAt: Date.now(),
    };
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id);
}

function save(note) {
    const savedNote = note._id
        ? storageService.put(STORAGE_KEY, note)
        : storageService.post(STORAGE_KEY, note);
    return savedNote;
    // noteToSave.createdAt = +noteToSave.createdAt;
    // if (noteToSave._id) {
    //     const idx = gNotes.findIndex((note) => note._id === noteToSave._id);
    //     gNotes.splice(idx, 1, noteToSave);
    // } else {
    //     noteToSave._id = makeId();
    //     noteToSave.createdAt = Date.now();
    //     gNotes.push(noteToSave);
    // }
    // storageService.store(STORAGE_KEY, gNotes);
    // return Promise.resolve(noteToSave);
}

async function _loadNotes() {
    let notes = await storageService.query(STORAGE_KEY);
    if (notes && notes.length) return notes;
    notes = gDefaultNotes;
    return await storageService.postMany(STORAGE_KEY, notes);
}
