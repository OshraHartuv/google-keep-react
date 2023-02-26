import './assets/scss/global.scss';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NoteApp } from './pages/NoteApp';
import { AppHeader } from './cmps/AppHeader';
import { TransactionApp } from './pages/TransactionApp';
import { TransactionEdit } from './pages/TransactionEdit';
import { NoteHome } from './pages/NoteHome';
import { SideMenu } from './cmps/SideMenu';

function App() {
    return (
        <Router>
            <div className="app ">
                <main className="main">
                    <AppHeader />
                    <Routes>
                        <Route path="/" element={<NoteApp />}>
                            <Route index element={<NoteHome />} />
                            {/* <Route
                                path="transaction/edit"
                                element={<TransactionEdit />}
                            /> */}
                        </Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
