import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadNotes,
    // removeNote,
    // setFilterBy,
} from '../store/actions/noteActions';

import { NoteList } from '../cmps/NoteList';
import { useNavigate } from 'react-router-dom';

export const NoteHome = () => {
    useEffect(() => {
        dispatch(loadNotes());
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { notes } = useSelector((state) => {
        return state.noteModule;
    });

    if (!notes) return <div>Loading...</div>;

    return (
        <div className="note-home">
            <button
                className="create-transaction"
                onClick={() => navigate('/note/edit')}
            >
                <div className="icon">edit</div>
            </button>
            <NoteList notes={notes} />
        </div>
    );
};
