import { Outlet } from 'react-router-dom';
import { SideMenu } from '../cmps/SideMenu';

export const NoteApp = (props) => {



    return (
        <div className="note-app">
            <SideMenu />
            <Outlet/>
        </div>
    );
};
