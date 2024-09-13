/* React entities import */
import { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Components static import */
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Spinner } from "./components/Spinner/Spinner";

/* Styles import */
import "./App.scss";

/* Lazy loading of pages (dynamic imports) */
const NotFoundPage = lazy(() => import("./pages/404"));
const CharactersPage = lazy(() => import("./pages/CharactersPage"));
const ComicsPage = lazy(() => import("./pages/ComicsPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));

export const App = () => {
	return (
		<Router basename={import.meta.env.BASE_URL}>
			<div className="app-container">
				<AppHeader />
				<main>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path={"/"} element={<CharactersPage />} />
							<Route path={"/characters"} element={<CharactersPage />} />
							<Route path={"/comics"} element={<ComicsPage />} />
							<Route path={"/:type/:id"} element={<DetailsPage />} />
							<Route path={"/*"} element={<NotFoundPage />} />
						</Routes>
					</Suspense>
				</main>
				<footer>Data provided by Marvel. © 2014 Marvel</footer>
			</div>
		</Router>
	);
};
