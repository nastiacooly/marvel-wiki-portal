import PropTypes from 'prop-types';

import './character-card.scss';

const CharacterCard = (props) => {
    const {id, image, name, onCharacterCardSelected, active} = props;

    /* Change styles for a "not found" image */
    const imageNotFound = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    let imageClassNames = "character-card__image";
    if (image === imageNotFound) {
        imageClassNames += " character-card__image_contain";
    }

    /* Change styles for selected card */
    let classNames = active ? 'character-card character-card_active' : 'character-card';

    return (
        <li 
            className={classNames}
            tabIndex="0"
            onClick={() => onCharacterCardSelected(id)}
            onKeyPress={(e) => {
                if (e.key === ' ' || e.key === "Enter") {
                    onCharacterCardSelected(id);
                }
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

CharacterCard.propTypes = {
    active: PropTypes.bool,
    onCharacterCardSelected: PropTypes.func.isRequired
}

export default CharacterCard;