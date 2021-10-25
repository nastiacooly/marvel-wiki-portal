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
        this.state = {
            character: {},
            loaded: false,
            error: false,
            errorMessage: "",
        }
    }

    componentDidMount() {
        /* Getting random character on opening the app */
        this.getRandomCharacter();
    }

    onCharacterLoading = () => {
        /**
         * Keeps corresponding states
         * for loading process.
         */
        this.setState({
            loaded: false,
            error: false
        })
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
        
        this.onCharacterLoading();

        const maxId = 1011400;
        const minId = 1011000;
        const randomId = Math.floor(minId + Math.random() * (maxId - minId));

        this.marvelService
            .getCharacter(randomId)
            .then(this.onCharacterLoaded)
            .catch(this.onError);
    }

    getContent = () => {
        /**
         * Determines content for rendering
         * depending on error and loaded status.
         */
        const {character, loaded, error, errorMessage} = this.state;

        /* Return content */
        return (
            error ? 
                <ErrorView message={errorMessage} flex="row" /> 
                : loaded ? 
                    <CharacterView character={character}/> 
                    : <Spinner/>
        );
    }
    
    render() {

        const content = this.getContent();

        return (
            <section className="random-section">

                <div className="random-character">
                    {content}
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


    /* Change styles for a "not found" image */
    const imageNotFound = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    let imageClassNames = "random-character__image";
    if (thumbnail === imageNotFound) {
        imageClassNames += " random-character__image_contain";
    }

    return (
        <Fragment>
            <div className={imageClassNames}>
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