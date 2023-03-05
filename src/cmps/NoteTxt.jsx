export const NoteTxt = ({ note }) => {
    return (
        <div className="note-txt note">
            <div className={(note.info.title) ? 'title bold' : 'title'}>{note.info.title || note.info.txt}</div>
            {note.info.title && <div className="body">{note.info.txt}</div>}
        </div>
    );
};
