import {useState} from 'react';

import AppHeader from '../app-header/app-header';
import RandomCharacter from '../random-character/random-character';
import CharactersList from '../characters-list/characters-list';
import CharacterDetails from '../character-details/character-details';

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
