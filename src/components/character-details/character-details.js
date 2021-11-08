import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import useMarvelAPIService from '../../services/marvel-api-service';
import ErrorView from '../error-view/error-view';
import Spinner from '../spinner/spinner';
import Skeleton from '../skeleton/skeleton';

import './character-details.scss';

const CharacterDetails = (props) => {
    const {characterId} = props;

    /* Initializing instances to communicate with Marvel API and work with 'loaded' and 'error' states */
    const {loaded, error, errorMessage, getCharacter, clearError} = useMarvelAPIService(true);

    /* Component states */
    const [character, setCharacter] = useState(null);

    /* Component logic */

    useEffect(() => {
        getCharacterDetails(characterId);
    }, [characterId]);

    const onCharacterLoaded = (character) => {
        /**
         * Saves character data to state
         * of this component.
         */
        setCharacter(character);
    }

    const getCharacterDetails = (id) => {
        /**
         * Gets data (object) from Marvel API on selected character
         * and saves it to the state of this component.
         */
        if (!id) {
            return;
        }
        
        clearError();
        setCharacter(null);
        getCharacter(id)
            .then(onCharacterLoaded);
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

    /* Rendering */

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