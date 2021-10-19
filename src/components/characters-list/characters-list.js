import CharacterCard from '../character-card/character-card';

import Abyss from '../../static/img/Abyss.png';
import Loki from '../../static/img/Loki.png';

import './characters-list.scss';

/* Simulation of data from API */
const characters = [
    {name: "Loki", image: Abyss},
    {name: "Abyss", image: Loki},
    {name: "Adam Warlock", image: Abyss},
    {name: "Boom Boom", image: Loki},
    {name: "Calypso", image: Abyss},
    {name: "Colleen Wing", image: Loki},
    {name: "Daimon Hellstrom", image: Abyss},
    {name: "Damage Control", image: Loki},
    {name: "Hulk", image: Abyss}
];

const CharactersList = () => {
    const characterCards = characters.map( (character, i) => {
        return <CharacterCard key={i} name={character.name} image={character.image}/>;
    });

    return (
        <div className="characters-list">
            {characterCards}

            <button className="app-button app-button_main app-button_wide">Load More</button>
        </div>
    );
}

export default CharactersList;