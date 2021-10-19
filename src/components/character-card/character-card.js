import './character-card.scss';

const CharacterCard = (props) => {

    return (
        <div className="character-card">
            <div className="character-card__image">
                <img src={props.image} alt="Comics Character Portrait" />
            </div>

            <div className="character-card__details">
                <h3 className="character-card__name">{props.name}</h3>
            </div>
        </div>
    );
}

export default CharacterCard;