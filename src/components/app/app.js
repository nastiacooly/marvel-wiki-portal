/* React entities import */
import { lazy, Suspense } from 'react';

import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';

/* Components static import */
import AppHeader from '../app-header/app-header';
import Spinner from '../spinner/spinner';

/* Styles import */
import './app.scss';

/* Lazy loading of pages (dynamic imports) */
const NotFoundPage = lazy(() => import('../pages/404'));
const CharactersPage = lazy(() => import('../pages/characters-page'));
const ComicsPage = lazy(() => import('../pages/comics-page'));
const SingleComicsPage = lazy(() => import('../pages/single-comics-page'));

const App = () => {

  return (
    <Router>
      <div className="app-container">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/marvel-wiki-portal" element={<CharactersPage/>} />
              <Route path="/marvel-wiki-portal/comics" element={<ComicsPage/>} />
              <Route path="/marvel-wiki-portal/comics/:comicsId" element={<SingleComicsPage />} />
              <Route path="/marvel-wiki-portal/*" element={<NotFoundPage />}/>
            </Routes>
          </Suspense>
        </main>
        <footer>
          Data provided by Marvel. © 2014 Marvel
        </footer>
      </div>
    </Router>
  );
}

export default App;
