import { useNavigate } from 'react-router-dom';
import { NoteTxt } from './NoteTxt';
import { NoteImg } from './NoteImg';
import { NoteTodos } from './NoteTodos';

export function NotePreview({ note }) {
    const navigate = useNavigate();

    const typeMap = {
        'note-txt': NoteTxt,
        'note-img': NoteImg,
        'note-todos': NoteTodos,
    };

    const DynamicComponent = typeMap[note.type];

    return (
        <section>
            <DynamicComponent note={note} />
        </section>
    );
}
