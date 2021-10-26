import {Component} from 'react';
import {Fragment} from 'react';
import PropTypes from 'prop-types';

import MarvelAPIService from '../../services/marvel-api-service';
import ErrorView from '../error-view/error-view';
import Spinner from '../spinner/spinner';
import Skeleton from '../skeleton/skeleton';

import './character-details.scss';

class CharacterDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: null,
            loaded: true,
            error: false,
            errorMessage: "",
        }
    }

    componentDidMount() {
        /* Getting selected character details */
        this.getCharacterDetails(this.props.characterId);
    }

    componentDidUpdate(prevProps) {
        /* Getting newly selected character details */
        if (this.props.characterId !== prevProps.characterId) {
            this.getCharacterDetails(this.props.characterId);
        }
    }

    /**
     * Initializing property for the component
     * to communicate with Marvel API
     */
    marvelService = new MarvelAPIService();

    onCharacterLoading = () => {
        /**
         * Keeps corresponding states
         * for loading process.
         */
        this.setState({
            loaded: false,
            error: false,
            character: null
        })
    }

    onCharacterLoaded = (character) => {
        /**
         * Saves character data to state
         * of this component.
         */
        this.setState({
            character: character,
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
            errorMessage: "Something went wrong. Please try again.",
        });
    }

    getCharacterDetails = (id) => {
        /**
         * Gets data (object) from Marvel API on selected character
         * and saves it to the state of this component.
         */
        if (!id) {
            return;
        }

        this.onCharacterLoading();

        this.marvelService
            .getCharacter(id)
            .then(this.onCharacterLoaded)
            .catch(this.onError);
    }

    getContent = () => {
        /**
         * Determines content for rendering
         * depending on error and loaded status.
         */
        const {character, loaded, error, errorMessage} = this.state;

        /* Return content */
        return (
            error ? 
                <ErrorView message={errorMessage} flex="row" /> 
                : loaded ? 
                    (character ? <CharacterDetailsView character={character}/> : <Skeleton/>)
                        : <Spinner/>
        );
    }

    render() {
        const {character} = this.state;
        const content = this.getContent();

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
        <Fragment>
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
        </Fragment>
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