import { Link } from 'react-router-dom';
import { useState } from 'react';

import './app-header.scss';

const AppHeader = () => {
    /* Component states */
    const [activeSection, setActiveSection] = useState('Characters');

    const onChooseSection = (e) => {
        setActiveSection(e.target.textContent);
    }

    /* Links classNames */
    const linkDefaultClassName = 'app-menu__item';
    const activeLinkClassName = ' app-menu__item_chosen';
    let charactersLinkClassNames = activeSection === 'Characters' ? linkDefaultClassName + activeLinkClassName : linkDefaultClassName;
    let comicsLinkClassName = activeSection === 'Comics' ? linkDefaultClassName + activeLinkClassName : linkDefaultClassName;
    
    return (
        <header className="app-header">
            <h1 className="app-name">
                <span className="app-name__main-title">Marvel</span> Wiki Portal
            </h1>

            <nav className="app-menu">
                <ul className="app-menu__list">
                    <li className={charactersLinkClassNames}>
                        <Link to="/" onClick={onChooseSection}>Characters</Link>
                    </li>
                    /
                    <li className={comicsLinkClassName}>
                        <Link to="/comics" onClick={onChooseSection}>Comics</Link>
                    </li>
                </ul>

            </nav>

        </header>
    );

}

export default AppHeader;