import { bulbIcon } from '../assets/svg/svgIcons';

export function SideMenu() {
    return (
        <nav className="side-menu">
            <div className="content">
                <div className="label">
                    <div className="icon">{bulbIcon()}</div>
                </div>
                <div className="label">
                    <div className="icon">{bulbIcon()}</div>
                </div>
                <div className="label">
                    <div className="icon">{bulbIcon()}</div>
                </div>
                <div className="label">
                    <div className="icon">{bulbIcon()}</div>
                </div>
            </div>
        </nav>
    );
}
