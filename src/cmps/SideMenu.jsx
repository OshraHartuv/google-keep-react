import {
    bulbIcon,
    bellIcon,
    penIcon,
    archiveIcon,
    deleteIcon,
} from '../assets/svg/svgIcons';

export function SideMenu() {
    return (
        <nav className="side-menu">
            <div className="content">
                <div className="label">
                    <div className="icon">{bulbIcon()}</div>
                    <span className="text">Notes</span>
                </div>
                <div className="label">
                    <div className="icon">{bellIcon()}</div>
                    <span className="text">Reminders</span>
                </div>
                <div className="label">
                    <div className="icon">{penIcon()}</div>
                    <span className="text">Edit labels</span>
                </div>
                <div className="label">
                    <div className="icon">{archiveIcon()}</div>
                    <span className="text">Archive</span>
                </div>
                <div className="label">
                    <div className="icon">{deleteIcon()}</div>
                    <span className="text">Bin</span>
                </div>
            </div>
        </nav>
    );
}
