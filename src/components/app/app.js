import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';

/* Pages */
import {
  CharactersPage, 
  ComicsPage,
  NotFound
} from '../pages';

/* Other Components */
import AppBanner from '../app-banner/app-banner';
import AppHeader from '../app-header/app-header';
import ComicsDetails from '../comics-details/comics-details';

/* Styles */
import './app.scss';

const App = () => {

  return (
    <Router>
      <div className="app-container">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<CharactersPage/>} />
            <Route path="/comics" element={<ComicsPage/>} >
              <Route path=":comicsId" element={
                  <>
                    <AppBanner/>
                    <ComicsDetails 
                    title="X-Men: Days of Future Past"
                    pages="144 pages"
                    description="
                      Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
                    " 
                    price="9.99$"/>
                  </>
                }
              />
            </Route>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
