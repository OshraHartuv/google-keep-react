import {noteService} from '../../services/noteService.js'

export function loadNotes(){
    return async (dispatch, getState) =>{
        try{
            const { filterBy } = getState().noteModule
            const notes = await noteService.query(filterBy)
            dispatch({type : 'SET_NOTES', notes})
        }catch(err){
            console.log('err in loadNotes >>',err);
        }
    }
}

export function removeNote(noteId){
    return async (dispatch) =>{
        try{
            await noteService.removeNote(noteId)
            dispatch({type : 'REMOVE_NOTE', noteId})

        }catch(err){
            console.log('err in removeNotes >>',err);
        }
    }
}

export function saveNote(noteToSave){
    const type = noteToSave._id ? 'UPDATE_NOTE' : 'ADD_NOTE'
    return async (dispatch) =>{
        try{
            const savedNote = await noteService.save(noteToSave)
            dispatch({type , note: savedNote})
        }catch(err){
            console.log('err in saveNotes >>',err);
        }
    }
}

export function setFilterBy(filterBy) {
    return async (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}