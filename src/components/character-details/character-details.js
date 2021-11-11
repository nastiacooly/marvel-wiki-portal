import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useMarvelAPIService from '../../services/marvel-api-service';
import ErrorView from '../error-view/error-view';
import Spinner from '../spinner/spinner';
import Skeleton from '../skeleton/skeleton';

import './character-details.scss';

const CharacterDetails = (props) => {
    const {characterId} = props;

    /* Initializing instances to communicate with Marvel API and work with 'loaded' and 'error' states */
    const {loaded, error, errorMessage, getCharacter, getCharacterComics, clearError} = useMarvelAPIService(true);

    /* Component states */
    const [character, setCharacter] = useState(null);
    const [characterComics, setCharacterComics] = useState([]);

    /* Component logic */

    useEffect(() => {
        getCharacterDetails(characterId);
        window.scrollTo(0, 0);
    }, [characterId]);

    const onCharacterLoaded = (character) => {
        /**
         * Saves character data to state
         * of this component.
         */
        setCharacter(character);
    }

    const onCharacterComicsLoaded = (comics) => {
        /**
         * Saves character data to state
         * of this component.
         */
        setCharacterComics(comics);
    }

    const getCharacterDetails = (id) => {
        /**
         * Gets data (object) from Marvel API on selected character
         * and comics mentioning him 
         * and saves it to the state of this component.
         */
        if (!id) {
            return;
        }
        
        clearError();
        setCharacter(null);
        setCharacterComics([]);
        getCharacter(id)
            .then(onCharacterLoaded)
            .then(() => getCharacterComics(id))
            .then(onCharacterComicsLoaded);
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
                    <CharacterDetailsView character={character}/>
                        : <Spinner/>
        );
    }

    /* Rendering */
    const content = getContent();

    const comics = characterComics.map(({id, title, thumbnail}) => {
        return <CharacterComicsView key={id} id={id} title={title} image={thumbnail}/>
    });

    const comicsContent = comics.length > 0 ? (<><h5>Comics:</h5> {comics}</>) : null;

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
     * If no character chosen, returns default skeleton.
     */
    if (!character) {
        return <Skeleton/>;
    }

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
    const {id, title, image} = props;

    return (
        <li className="character-info__single-comics">
            <Link to={`/marvel-wiki-portal/comics/${id}`} className="character-info__single-comics_on-hover">
                <h6>{title}</h6>
                <div>
                    <img src={image} alt={`Cover of ${title} comics`}/>
                </div>
            </Link>
        </li>
    );
}

CharacterDetails.propTypes = {
    characterId: PropTypes.number
}

export default CharacterDetails;