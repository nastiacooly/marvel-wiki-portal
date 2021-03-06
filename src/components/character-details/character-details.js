import {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useMarvelAPIService from '../../services/marvel-api-service';
import setContent from '../../utils/setContent';

import './character-details.scss';


const CharacterDetails = (props) => {
    const {characterId} = props;

    /* Ref for correct scrolling to character details component */
    const characterInfoRef = useRef(null);

    /* Initializing instances to communicate with Marvel API and work with its states */
    const {process, setProcess, getCharacter, getCharacterComics, clearError} = useMarvelAPIService();

    /* Component states */
    const [character, setCharacter] = useState(null);
    const [characterComics, setCharacterComics] = useState([]);

    /* Component logic */

    useEffect(() => {
        getCharacterDetails(characterId);
        onCharacterSelected();
    }, [characterId]);

    const onCharacterSelected = () => {
        /**
         * Smoothly scrolls page to character info element
         * on selection of character card.
         */
        let clientCoords = characterInfoRef.current.getBoundingClientRect();
        let scrollTop = window.scrollY + clientCoords.top;
        window.scrollTo(0, scrollTop);
    }

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
            .then(onCharacterComicsLoaded)
            .then(() => setProcess('success'));
    }

    const content = setContent(process, character, CharacterDetailsWholeView, characterComics);

    return (
        <div className="character-info" ref={characterInfoRef}>
            {content}
        </div>
    );

}


const CharacterDetailsView = ({character}) => {
    /**
     * Returns element with character details
     * or null.
     */    
    if (!character) {
        return null;
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


const CharacterComicsView = ({characterComics}) => {
    if (!characterComics || characterComics.length === 0) {
        return null;
    }

    const comics = characterComics.map(({id, name, thumbnail}) => {
        return (
            <li key={id} className="character-info__single-comics">
                <Link to={`/marvel-wiki-portal/comics/${id}`} className="character-info__single-comics_on-hover">
                    <h6>{name}</h6>
                    <div>
                        <img src={thumbnail} alt={`Cover of ${name} comics`}/>
                    </div>
                </Link>
            </li>
        );
    });

    return <><h5>Comics:</h5> {comics}</>;
}


const CharacterDetailsWholeView = ({character, characterComics}) => {
    return (
        <>
            <CharacterDetailsView character={character} />
            <ul className="character-info__comics">
                <CharacterComicsView characterComics={characterComics}/>
            </ul>
        </>
    );
}


CharacterDetails.propTypes = {
    characterId: PropTypes.number
}

export default CharacterDetails;