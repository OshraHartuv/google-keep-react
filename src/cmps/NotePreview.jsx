import { useNavigate } from 'react-router-dom';
import { NoteTxt } from './NoteTxt';
import { NoteImg } from './NoteImg';
import { NoteTodos } from './NoteTodos';
import { svgService } from '../services/svg.service';
import { plusBellIcon } from '../assets/svg/svgIcons';

export function NotePreview({ note }) {
    const navigate = useNavigate();

    const cmpTypeMap = {
        'note-txt': NoteTxt,
        'note-img': NoteImg,
        'note-todos': NoteTodos,
    };

    const DynamicComponent = cmpTypeMap[note.type];

    const getSvg = function (iconName) {
        return svgService.getSvg(iconName);
    };

    return (
        <section className='note-preview-container'>
            {/* <div className="icon check"></div> */}
            <section className="note-preview">
                <div className="icon pin"></div>
                <div className="content">
                    <DynamicComponent note={note} />
                </div>
                <div className="tools-container">
                    <div className="placeholder"></div>
                    <div className="tools">
                        {/* <span className="icon">{plusBellIcon()}</span> */}
                        <div className="icon bell"></div>
                        <div className="icon man"></div>
                        <div className="icon pallette"></div>
                        <div className="icon img"></div>
                        <div className="icon archive"></div>
                        <div className="icon menu"></div>
                    </div>
                </div>
            </section>
        </section>
    );
}
