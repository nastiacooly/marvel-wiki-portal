import AppHeader from '../app-header/app-header';
import RandomSection from '../random-character/random-character';
import CharactersList from '../characters-list/characters-list';
import CharacterDetails from '../character-details/character-details';

import vision from '../../static/img/bottom_bg.png';

import './app.scss';

function App() {
  return (
    <div className="app-container">
      <AppHeader />

      <main>
        <RandomSection />

        <div className="characters-container">
          <CharactersList />

          <CharacterDetails />
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
