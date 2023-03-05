export const NoteTodos = ({note}) => {
    return (
        <div className="note-todos note">
            <div className="title">{note.info.title}</div>
        </div>
    );
};