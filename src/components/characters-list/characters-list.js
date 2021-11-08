import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import useMarvelAPIService from '../../services/marvel-api-service';

import CharacterCard from '../character-card/character-card';
import ErrorView from '../error-view/error-view';
import Spinner from '../spinner/spinner';

import './characters-list.scss';

const CharactersList = (props) => {
    const {onCharacterCardSelected, activeCharacterCard} = props;
    /* Initializing instances to communicate with Marvel API */
    const marvelService = useMarvelAPIService();
    const baseOffset = marvelService._baseCharactersOffset;
    const charactersPerLoad = marvelService._baseCharactersLimit;
    const {loaded, error, errorMessage, newItemsLoading, clearError, getAllCharacters} = marvelService;
    /* Component states */
    const [characters, setCharacters] = useState([]);
    const [charactersEnded, setCharactersEnded] = useState(false);
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
        setCharactersEnded(ended);
        setOffset(offset => offset + charactersPerLoad);       
    }

    const onLoadCharacters = (offset) => {
        /**
         * Gets data (array) from Marvel API on additional
         * 9 characters and saves it to the state 
         * of this component.
         */
        clearError();

        getAllCharacters(offset)
            .then(onCharactersLoaded);
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