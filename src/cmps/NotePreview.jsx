import { useNavigate } from 'react-router-dom';

export function NotePreview({ note }) {
    const navigate = useNavigate();
    return <section>{note.info.title || note.info.txt}</section>;
}
