import {Component} from 'react';

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
            error: false,
            errorMessage: '',
        }
    }

    componentDidMount() {
        this.getCharacters();
    }

    /**
     * Initializing property for the component
     * to communicate with Marvel API
     */
    marvelService = new MarvelAPIService();

    getCharacters = () => {
        /**
         * Gets data (array) from Marvel API on 9 characters
         * and saves it to the state of this component.
         */
        this.marvelService
        .getAllCharacters()
        .then(this.onCharactersLoaded)
        .catch(this.onError);
    }

    onCharactersLoaded = (characters) => {
        /**
         * Saves characters data to state
         * of this component.
         */
        this.setState({
            characters,
            loaded: true,
            error: false
        });
    }

    onError = () => {
        /**
         * Keeps track of error in the state.
         */
        this.setState({
            loaded: true,
            error: true,
            errorMessage: "Something went wrong. Please try updating the page.",
        });
    }

    getContent = () => {
        /**
         * Determines content for rendering
         * depending on error and loaded status.
         */
        const {characters, error, loaded, errorMessage} = this.state;

        /* Mapping characters to CharacterCard components */
        const characterCards = characters.map( ({id, name, thumbnail}) => {
            return <CharacterCard key={id} name={name} image={thumbnail}/>;
        });

        /* Return content */
        return (
            error ? 
                <ErrorView message={errorMessage} flex="column" /> 
                : loaded ? 
                    characterCards 
                    : <Spinner/>
        );
    }

    render() {
        return (
            <div className="characters-section">
                <div className="characters-section__list">
                    {this.getContent()}
                </div>

                <button className="app-button app-button_main app-button_wide">Load More</button>
            </div>
            
        );
    }
}

export default CharactersList;