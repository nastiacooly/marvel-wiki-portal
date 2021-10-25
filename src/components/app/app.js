import {Component} from 'react';

import AppHeader from '../app-header/app-header';
import RandomCharacter from '../random-character/random-character';
import CharactersList from '../characters-list/characters-list';
import CharacterDetails from '../character-details/character-details';

import vision from '../../static/img/bottom_bg.png';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCharacterCard: null,
    }
  }

  onCharacterCardSelected = (id) => {
    this.setState({
      activeCharacterCard: id,
    });
  }

  render() {
    const {activeCharacterCard} = this.state;

    return (
      <div className="app-container">
        <AppHeader />
  
        <main>
          <RandomCharacter />
  
          <div className="characters-container">
            <CharactersList onCharacterCardSelected={this.onCharacterCardSelected}/>
            <CharacterDetails characterId={activeCharacterCard}/>
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
}

export default App;
