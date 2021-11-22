import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMarvelAPIService from '../../services/marvel-api-service';

import ErrorView from '../error-view/error-view';
import Spinner from '../spinner/spinner';

import './character-found.scss';


const CharacterFound = (props) => {
    const {characterId} = props;

    /* Initializing instances to communicate with Marvel API and work with 'loaded' and 'error' states */
    const {loaded, error, errorMessage, getCharacter, clearError} = useMarvelAPIService();

    /* Component states */
    const [character, setCharacter] = useState(null);

    /* Component logic */
    useEffect(() => {
        getCharacterDetails(characterId);
    }, [characterId]);

    const onCharacterLoaded = (character) => {
        /**
         * Saves comics data to state
         * of this component.
         */
        setCharacter(character);
    }

    const getCharacterDetails = (id) => {
        /**
         * Gets data (object) from Marvel API on selected comics
         * and saves it to the state of this component.
         */
        clearError();
        getCharacter(id)
            .then(onCharacterLoaded);
    }

    console.log(character);

    return (<>
                <CharacterDetailsView character={character}/>
                <Spinner loaded={loaded}/>
                <ErrorView error={error} errorMessage={errorMessage}/>
            </>);
}


const CharacterDetailsView = ({character}) => {
    /**
     * Returns element with comics details.
     * If no comics chosen, returns null.
     */
    if (!character) {
        return null;
    }

    const {name, thumbnail, description} = character;

    /* Change styles for a "not found" image */
    const imageNotFound = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    let imageClassNames = "character-info__image";
    if (thumbnail === imageNotFound) {
        imageClassNames += " character-info__image_fill";
    }
    
    return (
        <div className="character-info">
            <div className={imageClassNames}>
                <img src={thumbnail} alt={`Portrait of ${name}`}/>
            </div>

            <div className="character-info__main">
                <h3 className="character-info__title">{name}</h3>

                <article className="character-info__description">
                    {description}
                </article>

            </div>

            <div className="character-info__links">
                <Link to="/marvel-wiki-portal/" className="character-info__link">Back to all</Link>
            </div>
        </div>
    );
}

export default CharacterFound;