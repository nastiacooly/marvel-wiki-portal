import {Component} from 'react';

import MarvelAPIService from '../../services/marvel-api-service';

import '../../button.scss';
import './random-character.scss';

class RandomCharacter extends Component {
    constructor(props) {
        super(props);
        /* Getting random character on opening the app */
        this.getRandomCharacter();
        this.state = {
            character: {},
        }
    }

    onCharacterLoaded = (character) => {
        /**
         * Saves character data to state
         * of this component.
         */
        this.setState({character});
    }

    /**
     * Initializing property for the component
     * to communicate with Marvel API
     */
    marvelService = new MarvelAPIService();

    getRandomCharacter = () => {
        /**
         * Gets data (object) from Marvel API on random character
         * and saves it to the state of this component.
         */
        const maxId = 1011400;
        const minId = 1011000;
        const randomId = Math.floor(minId + Math.random() * (maxId - minId));

        this.marvelService
            .getCharacter(randomId)
            .then(this.onCharacterLoaded);
    }
    
    render() {
        const {name, description, thumbnail, homepage, wiki} = this.state.character;

        return (
            <section className="random-section">

                <div className="random-character">
                    <div className="random-character__image">
                        <img src={thumbnail} alt="random character" />
                    </div>
        
                    <div className="random-character__details">
                        <h3 className="random-character__name">
                            {name}
                        </h3>
                        <p className="random-character__descr">
                            {description}
                        </p>
                        <div className="random-character__links">
                            <a href={homepage} className="app-button app-button_main">Homepage</a>
                            <a href={wiki} className="app-button">Wiki</a>
                        </div>
                    </div>
                </div>

                <div className="random-choose">
                    <p className="random-choose__text">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>

                    <div>
                        <p className="random-choose__text random-choose__text_margined">Or choose another one</p>
                        <button 
                            className="app-button app-button_main app-button_on-dark-bg"
                            onClick={this.getRandomCharacter}>
                                Try It
                        </button>
                    </div>
                </div>
            
            </section>
            
        );
    }
}

export default RandomCharacter;