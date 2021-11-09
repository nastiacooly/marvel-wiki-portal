import { Link, NavLink } from 'react-router-dom';

import './app-header.scss';

const AppHeader = () => {    
    return (
        <header className="app-header">
            <h1 className="app-name">
                <Link to="/">
                <span className="app-name__main-title">Marvel</span> Wiki Portal
                </Link>
            </h1>

            <nav className="app-menu">
                <ul className="app-menu__list">
                    <li className='app-menu__item'>
                        <NavLink to="/" activeClassName="active">Characters</NavLink>
                    </li>
                    /
                    <li className='app-menu__item'>
                        <NavLink to="/comics" activeClassName="active">Comics</NavLink>
                    </li>
                </ul>

            </nav>

        </header>
    );

}

export default AppHeader;