import {Component} from 'react';
import {Fragment} from 'react';

import MarvelAPIService from '../../services/marvel-api-service';
import Spinner from '../spinner/spinner';
import ErrorView from '../error-view/error-view';

import '../../button.scss';
import './random-character.scss';

class RandomCharacter extends Component {
    constructor(props) {
        super(props);
        /* Getting random character on opening the app */
        this.getRandomCharacter();
        this.state = {
            character: {},
            loaded: false,
            error: false,
            errorMessage: "",
        }
    }

    onCharacterLoaded = (character) => {
        /**
         * Saves character data to state
         * of this component.
         */
        this.setState({
            character: character,
            loaded: true,
            error: false
        });
    }

    onError = () => {
        /**
         * Keeps track of error in the state.
         */
        this.setState({
            loaded: true,
            error: true,
            errorMessage: "Something went wrong. Please try again.",
        });
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
        
        this.setState({
            loaded: false,
            error: false
        })

        const maxId = 1011400;
        const minId = 1011000;
        const randomId = Math.floor(minId + Math.random() * (maxId - minId));

        this.marvelService
            .getCharacter(randomId)
            .then(this.onCharacterLoaded)
            .catch(this.onError);
    }
    
    render() {
        const {character} = this.state;
        const {loaded, error, errorMessage} = this.state;

        return (
            <section className="random-section">

                <div className="random-character">
                    {   
                        error ? 
                            <ErrorView message={errorMessage}/> : 
                                loaded ?
                                    <CharacterView character={character}/> : <Spinner/>
                    }
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

const CharacterView = ({character}) => {
    const {name, thumbnail, description, homepage, wiki} = character;

    return (
        <Fragment>
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
        </Fragment>
    );
}

export default RandomCharacter;