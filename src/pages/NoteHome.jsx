import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadNotes,
    // removeNote,
    // setFilterBy,
} from '../store/actions/noteActions';

import { NoteList } from '../cmps/NoteList';

export const NoteHome = () => {
    useEffect(() => {
        dispatch(loadNotes());
    }, []);

    const dispatch = useDispatch();

    const { notes } = useSelector((state) => {
        return state.noteModule
    });

    if (!notes ) return <div>Loading...</div>;

    return (
        <div className="note-home">
            <NoteList notes={notes}/>
           
        </div>
    );
};
