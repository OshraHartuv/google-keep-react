import { GrClose } from 'react-icons/gr';
import {
    appsIcon,
    menuIcon,
    refreshIcon,
    searchIcon,
    settingsIcon,
} from '../assets/svg/svgIcons';
export function AppHeader() {
    return (
        <header className="app-header flex full">
            <div className="menu">
                <button className="icon">{menuIcon('24px', '24px')}</button>
                <div className="logo">
                    <img
                        className="keep-logo"
                        src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                    />
                    <span>Keep</span>
                </div>
            </div>
            <div className="search">
                <span className="icon search-icon">{searchIcon()}</span>
                <input type="text" placeholder="search" />
                <span className="icon close">
                    <GrClose />
                </span>
            </div>
            <div className="tools">
                <button className="icon">{refreshIcon()}</button>
                <button className="icon">{settingsIcon()}</button>
                <button className="icon">{appsIcon()}</button>
                <div className="avatar">
                    <img src={require('../assets/imgs/doggo.jpg')} />
                </div>
            </div>
        </header>
    );
}
