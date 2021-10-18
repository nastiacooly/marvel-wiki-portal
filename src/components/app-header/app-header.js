import './app-header.scss';

const AppHeader = () => {
    return (
        <header className="app-header">
            <h1 className="app-name">
                <span className="app-name__main-title">Marvel</span> Wiki Portal
            </h1>

            <nav className="app-menu">
                <ul className="app-menu__list">
                    <li className="app-menu__item app-menu__item_chosen">Characters</li>
                    /
                    <li className="app-menu__item">Comics</li>
                </ul>

            </nav>

        </header>
    );

}

export default AppHeader;