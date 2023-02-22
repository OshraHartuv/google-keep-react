import { bulbIcon,bellIcon, penIcon, archiveIcon, deleteIcon } from '../assets/svg/svgIcons';

export function SideMenu() {
    return (
        <nav className="side-menu">
            <div className="content">
                <div className="label">
                    <div className="icon">{bulbIcon()}</div>
                </div>
                <div className="label">
                    <div className="icon">{bellIcon()}</div>
                </div>
                <div className="label">
                    <div className="icon">{penIcon()}</div>
                </div>
                <div className="label">
                    <div className="icon">{archiveIcon()}</div>
                </div>
                <div className="label">
                    <div className="icon">{deleteIcon()}</div>
                </div>
            </div>
        </nav>
    );
}
