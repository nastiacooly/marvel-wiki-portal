import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import MarvelAPIService from '../../services/marvel-api-service';

import CharacterCard from '../character-card/character-card';
import ErrorView from '../error-view/error-view';
import Spinner from '../spinner/spinner';

import './characters-list.scss';

const CharactersList = (props) => {
    const {onCharacterCardSelected, activeCharacterCard} = props;
    /* Initializing an instance to communicate with Marvel API */
    const marvelService = new MarvelAPIService();
    const baseOffset = marvelService._baseCharactersOffset;
    const charactersPerLoad = marvelService._baseCharactersLimit;
    /* Component states */
    const [characters, setCharacters] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [charactersEnded, setCharactersEnded] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [offset, setOffset] = useState(baseOffset);

    /* Component logic */
    useEffect(() => {
        onLoadCharacters();
    }, []);

    const onCharactersLoaded = (newCharacters) => {
        /**
         * Saves newly uploaded characters data 
         * to the state of this component.
         * And updates offset for following uploads.
         */ 

        /* No "load more" button if characters ended */
        let ended = false;
        if (newCharacters.length < charactersPerLoad) {
            ended = true;
        }
        
        setCharacters(characters => [...characters, ...newCharacters]);
        setLoaded(true);
        setNewItemsLoading(false);
        setCharactersEnded(ended);
        setOffset(offset => offset + charactersPerLoad);        
    }

    const onCharactersLoading = () => {
        /**
         * Keeps corresponding states
         * for loading process.
         */
        setLoaded(false);
        setError(false);
        setNewItemsLoading(true);
    }

    const onError = () => {
        /**
         * Keeps track of error in the state.
         */
        const message = "Something went wrong. Please try updating the page.";
        setLoaded(true);
        setError(true);
        setNewItemsLoading(false);
        setErrorMessage(message);
    }

    const onLoadCharacters = (offset) => {
        /**
         * Gets data (array) from Marvel API on additional
         * 9 characters and saves it to the state 
         * of this component.
         */
        onCharactersLoading();

        marvelService
            .getAllCharacters(offset)
            .then(onCharactersLoaded)
            .catch(onError);
    }

    const renderCharacterCards = (characters) => {
        /**
         * Returns character cards elements
         * with data about characters.
         */
        if (!characters) {
            return null;
        }

        /* Mapping characters to CharacterCard components */
        return characters.map( ({id, name, thumbnail}) => {
            let active = id === activeCharacterCard;
            return <CharacterCard 
                        key={id} 
                        id={id}
                        name={name} 
                        image={thumbnail}
                        onCharacterCardSelected={onCharacterCardSelected}
                        active={active}
                    />;
        });
    }

    const getContent = () => {
        /**
         * Determines content for rendering
         * depending on error and loaded status.
         */
        const characterCards = renderCharacterCards(characters);

        /* Return content */
        return (
            error ? 
                <ErrorView message={errorMessage} flex="column" /> 
                : loaded ? 
                    characterCards 
                    : (<> {characterCards} <Spinner/> </>)
        );
    }

    /* Rendering */

    const content = getContent();

    return (
        <div className="characters-section">
            <ul className="characters-section__list">
                {content}
            </ul>

            <button 
                className="app-button app-button_main app-button_wide"
                disabled={newItemsLoading}
                style={{'display': charactersEnded ? 'none' : 'block'}}
                onClick={() => onLoadCharacters(offset)}
                >
                    Load More
            </button>
        </div>
        
    );
}

CharactersList.propTypes = {
    activeCharacterCard: PropTypes.number,
    onCharacterCardSelected: PropTypes.func.isRequired
}

export default CharactersList;