import {useState, useEffect} from 'react';

import MarvelAPIService from '../../services/marvel-api-service';
import Spinner from '../spinner/spinner';
import ErrorView from '../error-view/error-view';

import '../../button.scss';
import './random-character.scss';

const RandomCharacter = () => {
    /* Initializing instance to communicate with Marvel API */
    const marvelService = new MarvelAPIService();

    /* Component states */
    const [character, setCharacter] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    /* Component logic */

    useEffect(() => {
        /* Getting random character on opening the app */
        getRandomCharacter();
    }, []);

    const onCharacterLoading = () => {
        /**
         * Keeps corresponding states
         * for loading process.
         */
        setLoaded(false);
        setError(false);
        
    }

    const onCharacterLoaded = (character) => {
        /**
         * Saves character data to state
         * of this component.
         */
        setCharacter(character);
        setLoaded(true);
        setError(false);
    }

    const onError = () => {
        /**
         * Keeps track of error in the state.
         */
        const message = "Something went wrong. Please try again.";
        setLoaded(true);
        setError(true);
        setErrorMessage(message);
    }

    const getRandomCharacter = () => {
        /**
         * Gets data (object) from Marvel API on random character
         * and saves it to the state of this component.
         */
        
        onCharacterLoading();

        const maxId = 1011400;
        const minId = 1011000;
        const randomId = Math.floor(minId + Math.random() * (maxId - minId));

        marvelService
            .getCharacter(randomId)
            .then(onCharacterLoaded)
            .catch(onError);
    }

    const getContent = () => {
        /**
         * Returns content for rendering
         * depending on error and loaded status.
         */
        return (
            error ? 
                <ErrorView message={errorMessage} flex="row" /> 
                : loaded ? 
                    <CharacterView character={character}/> 
                    : <Spinner/>
        );
    }

    /* Rendering */

    const content = getContent();

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
                        onClick={getRandomCharacter}>
                            Try It
                    </button>
                </div>
            </div>
        
        </section>
        
    );
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
        <>
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
        </>
    );
}

export default RandomCharacter;