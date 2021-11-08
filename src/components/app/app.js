import {useState} from 'react';

import AppHeader from '../app-header/app-header';
/* import AppBanner from '../app-banner/app-banner'; */
import RandomCharacter from '../random-character/random-character';
import CharactersList from '../characters-list/characters-list';
import CharacterDetails from '../character-details/character-details';
/* import ComicsList from '../comics-list/comics-list';
import ComicsDetails from '../comics-details/comics-details'; */

import ErrorBoundary from '../error-boundary/error-boundary';

import vision from '../../static/img/bottom_bg.png';

import './app.scss';

const App = () => {
  const [activeCharacterCard, setActiveCharacterCard] = useState(null);

  const onCharacterCardSelected = (id) => {
    setActiveCharacterCard(id);
  }

  return (
    <div className="app-container">
      <AppHeader />
      {/* <AppBanner /> */}

      <main>

        <ErrorBoundary>
          <RandomCharacter />
        </ErrorBoundary>

        <div className="characters-container">
          <ErrorBoundary>
            <CharactersList 
              activeCharacterCard={activeCharacterCard} 
              onCharacterCardSelected={onCharacterCardSelected}
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <CharacterDetails characterId={activeCharacterCard}/>
          </ErrorBoundary>
        </div>

        {/* <ErrorBoundary>
          <ComicsDetails 
            title="X-Men: Days of Future Past"
            pages="144 pages"
            description="
              Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
            " 
            price="9.99$"/>
        </ErrorBoundary>

        <ErrorBoundary>
          <ComicsList />
        </ErrorBoundary> */}

      </main>

      <footer className="app-footer">
        <img 
          src={vision} 
          alt="Vision Character in Attacking Pose" 
          className="app-footer__image"
        />
      </footer>
    </div>
  );
}

export default App;
