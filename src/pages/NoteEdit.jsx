import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { noteService } from '../services/noteService';
import { saveNote } from '../store/actions/noteActions';
import { useClickOutside } from '../hooks/useClickOutside';

export const NoteEdit = () => {
    const [note, handleChange, setNote] = useForm(null);
    const params = useParams();
    const { id } = params;
    const navigate = useNavigate();

    useEffect(() => {
        loadNote();
    }, [params.id]);

    const dispatch = useDispatch();

    const modalRef = useRef();
    useClickOutside(modalRef, () => {
        navigate('/');
    });

    const onSaveNote = async (ev) => {
        ev.preventDefault();
        await dispatch(saveNote({ ...note }));
        navigate('/');
    };

    const loadNote = async () => {
        const note = id
            ? await noteService.getById(id)
            : noteService.getEmptyNote();
        console.log('note', note);
        setNote(note);
    };

    // const onRemoveNote = async (noteId) => {
    //     dispatch(removeNote(noteId))
    // }

    if (!note) return <div>Loading...</div>;
    return (
        <div className="modal-wrapper">
            <section className="note-edit wrapped-modal" ref={modalRef}>
                <h1>{note._id ? 'Edit' : 'Add'} Note</h1>
                <form onSubmit={onSaveNote}>
                    <label htmlFor="title"> Title </label>

                    <input
                        onChange={handleChange}
                        value={note.title}
                        type="text"
                        name="title"
                        id="title"
                    />

                    <button>Save</button>
                </form>
            </section>
        </div>
    );
};
