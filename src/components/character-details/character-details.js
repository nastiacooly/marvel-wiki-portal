import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import MarvelAPIService from '../../services/marvel-api-service';
import ErrorView from '../error-view/error-view';
import Spinner from '../spinner/spinner';
import Skeleton from '../skeleton/skeleton';

import './character-details.scss';

const CharacterDetails = (props) => {
    const {characterId} = props;
    /* Component states */
    const [character, setCharacter] = useState(null);
    const [loaded, setLoaded] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onCharacterLoading = () => {
        /**
         * Keeps corresponding states
         * for loading process.
         */
        setLoaded(false);
        setError(false);
        setCharacter(null);
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
        const errorMessage = "Something went wrong. Please try again.";
        setLoaded(true);
        setError(true);
        setErrorMessage(errorMessage);
    }

    const getContent = () => {
        /**
         * Returns different content for rendering
         * depending on error and loaded status.
         */
        return (
            error ? 
                <ErrorView message={errorMessage} flex="row" /> 
                : loaded ? 
                    (character ? <CharacterDetailsView character={character}/> : <Skeleton/>)
                        : <Spinner/>
        );
    }

    useEffect(() => {
        /**
         * Updates character details
         * when user selects new character
         * (with different id).
         */

        /* Initializing an instance to communicate with Marvel API */
        const marvelService = new MarvelAPIService();

        const getCharacterDetails = (id) => {
            /**
             * Gets data (object) from Marvel API on selected character
             * and saves it to the state of this component.
             */
            if (!id) {
                return;
            }
    
            onCharacterLoading();
    
            marvelService
                .getCharacter(id)
                .then(onCharacterLoaded)
                .catch(onError);
        }

        getCharacterDetails(characterId);
    }, [characterId]);


    /* Content definitions */
    const content = getContent();

    const characterComics = character?.comics?.map((item, i) => {
        return <CharacterComicsView key={i} name={item.name}/>
    });

    const comicsContent = characterComics && characterComics.length > 0 ? 
                            (<><h5>Comics:</h5> {characterComics}</>) 
                            : null;

    return (
        <div className="character-info">
            {content}
            <ul className="character-info__comics">
                {comicsContent}
            </ul>
        </div>
    );

}


const CharacterDetailsView = ({character}) => {
    /**
     * Returns element with character details.
     */
    const {name, thumbnail, description, homepage, wiki} = character;

    /* Change styles for a "not found" image */
    const imageNotFound = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    let imageClassNames = "character-info__image";
    if (thumbnail === imageNotFound) {
        imageClassNames += " character-info__image_contain";
    }

    return (
        <>
            <div className="character-info__header">
                    <div className={imageClassNames}>
                        <img src={thumbnail} alt="Character Portrait"/>
                    </div>
    
                    <div className="character-info__main">
                        <h3 className="character-info__name">{name}</h3>
    
                        <div className="character-info__links">
                            <a href={homepage} className="app-button app-button_main app-button_mb10">Homepage</a>
                            <a href={wiki} className="app-button">Wiki</a>
                        </div>
                    </div>
            </div>
    
            <article className="character-info__bio">
                {description}
            </article>
        </>
    );
}


const CharacterComicsView = (props) => {
    return (
        <li className="character-info__single-comics">
            {props.name}
        </li>
    );
}

CharacterDetails.propTypes = {
    characterId: PropTypes.number
}

export default CharacterDetails;