export const NoteTxt = ({note}) => {
    return (
        <div className="note-txt note">
            <div className="title">{note.info.txt}</div>
        </div>
    );
};
