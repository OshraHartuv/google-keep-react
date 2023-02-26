import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadNotes,
    // removeNote,
    // setFilterBy,
} from '../store/actions/noteActions';

export const NoteHome = (props) => {
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
           
        </div>
    );
};
