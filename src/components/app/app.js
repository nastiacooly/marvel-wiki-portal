import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';

/* Pages */
import {
  CharactersPage, 
  ComicsPage,
  ComicsDetails,
  NotFound
} from '../pages';

/* Other Components */
import AppHeader from '../app-header/app-header';

/* Styles */
import './app.scss';

const App = () => {

  return (
    <Router>
      <div className="app-container">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/marvel-wiki-portal" element={<CharactersPage/>} />
            <Route path="/marvel-wiki-portal/comics" element={<ComicsPage/>} />
            <Route path="/marvel-wiki-portal/comics/:comicsId" element={<ComicsDetails/>} />
            <Route path="/marvel-wiki-portal/*" element={<NotFound />}/>
          </Routes>
        </main>
        <footer>
          Data provided by Marvel. © 2014 Marvel
        </footer>
      </div>
    </Router>
  );
}

export default App;
