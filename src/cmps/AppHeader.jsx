import { RxGear, RxReload } from 'react-icons/rx';
import { TbGridDots } from 'react-icons/tb';
import { TfiViewList } from 'react-icons/tfi';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';
import { GrClose } from 'react-icons/gr';
export function AppHeader() {
    return (
        <header className="app-header flex full">
            <div className="tools">
                <img
                    className="avatar"
                    src="https://lh3.googleusercontent.com/ogw/AAEL6shCk1ZY60rWoW7uIVQrdJVCYZoHIPLO4DbwMUAG=s32-c-mo"
                />

                <button className="apps icon">
                    <TbGridDots />
                </button>
                <button className="gear icon">
                    <RxGear />
                </button>
                <button className="list icon">
                    <TfiViewList />
                </button>
                <button className="reload icon">
                    <RxReload />
                </button>
            </div>
            <div className="search">
                <span className="icon">
                    <GrClose />
                </span>
                <input type="text" />
                <span className="icon">
                    <AiOutlineSearch />
                </span>
            </div>
            <div className="menu">
                <div className="logo">
                    <span>Keep</span>
                    <img
                        className="keep-logo"
                        src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                    />
                </div>
                <button className="icon">
                    <IoIosMenu />
                </button>
            </div>
        </header>
    );
}
