import {Component} from 'react';

import './character-card.scss';

class CharacterCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    onActivate = () => {
        this.setState(({active}) => ({
            active: !active
        }));
    }

    render() {
        const {id, image, name, onCharacterCardSelected} = this.props;

        /* Change styles for active card */
        let className = "character-card";
        if (this.state.active) {
            className += " character-card_active";
        }

        /* Change styles for a "not found" image */
        const imageNotFound = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
        let imageClassNames = "character-card__image";
        if (this.props.image === imageNotFound) {
            imageClassNames += " character-card__image_contain";
        }

        return (
            <li 
                className={className} 
                onClick={() => {
                    onCharacterCardSelected(id);
                    this.onActivate();
                }}
            >
                    <div className={imageClassNames}>
                        <img src={image} alt="Comics Character Portrait" />
                    </div>
        
                    <div className="character-card__details">
                        <h3 className="character-card__name">{name}</h3>
                    </div>
            </li>
        );
    }
}

export default CharacterCard;