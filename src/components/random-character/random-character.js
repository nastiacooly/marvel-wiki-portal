import {useState, useEffect} from 'react';

import useMarvelAPIService from '../../services/marvel-api-service';

import ErrorView from '../error-view/error-view';
import Spinner from '../spinner/spinner';

import '../../button.scss';
import './random-character.scss';

const RandomCharacter = () => {
    /* Initializing instances to communicate with Marvel API and work with 'loaded' and 'error' states */
    const {loaded, error, errorMessage, getCharacter, clearError} = useMarvelAPIService();

    /* Component states */
    const [character, setCharacter] = useState(null);

    /* Component logic */

    useEffect(() => {
        /* Getting random character on opening the app */
        getRandomCharacter();
    }, []);

    const onCharacterLoaded = (character) => {
        /**
         * Saves character data to state
         * of this component.
         */
        setCharacter(character);
    }

    const getRandomCharacter = () => {
        /**
         * Gets data (object) from Marvel API on random character
         * and saves it to the state of this component.
         */
        clearError();
        setCharacter(null);

        const maxId = 1011400;
        const minId = 1011000;
        const randomId = Math.floor(minId + Math.random() * (maxId - minId));

        getCharacter(randomId)
            .then(onCharacterLoaded);
    }

    return (
        <section className="random-section">

            <div className="random-character">
                <CharacterView character={character}/>
                <Spinner loaded={loaded}/>
                <ErrorView error={error} errorMessage={errorMessage} flex="row"/>
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
    if (!character) {
        return null;
    }

    const {name, thumbnail, description, homepage, wiki} = character;

    /* Change styles for a "not found" image */
    const imageNotFound = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    let imageClassNames = "random-character__image";
    if (thumbnail === imageNotFound) {
        imageClassNames += " random-character__image_contain";
    }

    /* Shorten long desription */
    let shortDescription = description;
    if (description.length >= 235) {
        shortDescription = description.slice(0, 235) + "...";
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
                    {shortDescription}
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