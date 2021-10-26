import {Component} from 'react';
import PropTypes from 'prop-types';

import MarvelAPIService from '../../services/marvel-api-service';

import CharacterCard from '../character-card/character-card';
import ErrorView from '../error-view/error-view';
import Spinner from '../spinner/spinner';

import './characters-list.scss';

class CharactersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            loaded: false,
            newItemsLoading: false,
            charactersEnded: false,
            error: false,
            errorMessage: '',
            offset: this.marvelService._baseCharactersOffset,
        }
    }

    componentDidMount() {
        this.onLoadCharacters();
    }

    /**
     * Initializing property for the component
     * to communicate with Marvel API
     */
    marvelService = new MarvelAPIService();

    onLoadCharacters = (offset) => {
        /**
         * Gets data (array) from Marvel API on additional
         * 9 characters and saves it to the state 
         * of this component.
         */
        this.onCharactersLoading();

        this.marvelService
            .getAllCharacters(offset)
            .then(this.onCharactersLoaded)
            .catch(this.onError);
    }

    onCharactersLoaded = (characters) => {
        /**
         * Saves newly uploaded characters data 
         * to the state of this component.
         * And updates offset for following uploads.
         */
        this.setState((state) => {     
            const charactersPerLoad = this.marvelService._baseCharactersLimit;

            /* No "load more" button if characters ended */
            let ended = false;
            if (characters.length < charactersPerLoad) {
                ended = true;
            }
            
            return {
                characters: [...state.characters, ...characters],
                loaded: true,
                newItemsLoading: false,
                charactersEnded: ended,
                error: false,
                offset: state.offset + charactersPerLoad,
            }
        });
    }

    onCharactersLoading = () => {
        /**
         * Keeps corresponding states
         * for loading process.
         */
        this.setState({
            loaded: false,
            error: false,
            newItemsLoading: true
        })
    }

    onError = () => {
        /**
         * Keeps track of error in the state.
         */
        this.setState({
            loaded: true,
            error: true,
            newItemsLoading: false,
            errorMessage: "Something went wrong. Please try updating the page.",
        });
    }

    renderCharacterCards = (characters) => {
        /**
         * Returns character cards elements
         * with data about characters.
         */
        if (!characters) {
            return null;
        }

        const {onCharacterCardSelected} = this.props;
        /* Mapping characters to CharacterCard components */
        return characters.map( ({id, name, thumbnail}) => {
            return <CharacterCard 
                        key={id} 
                        id={id}
                        name={name} 
                        image={thumbnail}
                        onCharacterCardSelected={onCharacterCardSelected}
                    />;
        });
    }

    getContent = () => {
        /**
         * Determines content for rendering
         * depending on error and loaded status.
         */
        const {characters, error, loaded, errorMessage} = this.state;
        
        const characterCards = this.renderCharacterCards(characters);

        /* Return content */
        return (
            error ? 
                <ErrorView message={errorMessage} flex="column" /> 
                : loaded ? 
                    characterCards 
                    : (<> {characterCards} <Spinner/> </>)
        );
    }

    render() {
        const {offset, newItemsLoading, charactersEnded} = this.state;
        const content = this.getContent();

        return (
            <div className="characters-section">
                <ul className="characters-section__list">
                    {content}
                </ul>

                <button 
                    className="app-button app-button_main app-button_wide"
                    disabled={newItemsLoading}
                    style={{'display': charactersEnded ? 'none' : 'block'}}
                    onClick={() => this.onLoadCharacters(offset)}
                    >
                        Load More
                </button>
            </div>
            
        );
    }
}

CharactersList.propTypes = {
    onCharacterCardSelected: PropTypes.func.isRequired
}

export default CharactersList;