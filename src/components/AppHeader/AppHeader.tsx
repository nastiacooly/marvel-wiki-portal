import { Link, NavLink } from "react-router-dom";

import "./AppHeader.scss";

export const AppHeader = () => {
	return (
		<header className="app-header">
			<h1 className="app-name">
				<Link to="/characters">
					<span className="app-name__main-title">Marvel</span> Wiki Portal
				</Link>
			</h1>

			<nav className="app-menu">
				<ul className="app-menu__list">
					<li className="app-menu__item">
						<NavLink to="/characters">Characters</NavLink>
					</li>
					/
					<li className="app-menu__item">
						<NavLink to="/comics">Comics</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
