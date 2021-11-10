import { Link, NavLink } from 'react-router-dom';

import './app-header.scss';

const AppHeader = () => {    
    return (
        <header className="app-header">
            <h1 className="app-name">
                <Link to="/marvel-wiki-portal">
                <span className="app-name__main-title">Marvel</span> Wiki Portal
                </Link>
            </h1>

            <nav className="app-menu">
                <ul className="app-menu__list">
                    <li className='app-menu__item'>
                        <NavLink end to="/marvel-wiki-portal">Characters</NavLink>
                    </li>
                    /
                    <li className='app-menu__item'>
                        <NavLink to="/marvel-wiki-portal/comics">Comics</NavLink>
                    </li>
                </ul>

            </nav>

        </header>
    );

}

export default AppHeader;