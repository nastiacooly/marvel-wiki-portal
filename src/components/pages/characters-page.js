import { useState } from 'react';

import RandomCharacter from '../random-character/random-character';
import CharactersList from '../characters-list/characters-list';
import CharacterDetails from '../character-details/character-details';
import ErrorBoundary from '../error-boundary/error-boundary';

import vision from '../../static/img/bottom_bg.png';

const CharactersPage = () => {
    const [activeCharacterCard, setActiveCharacterCard] = useState(null);

    const onCharacterCardSelected = (id) => {
        setActiveCharacterCard(id);
    }

    return (
        <>
            <ErrorBoundary>
                <RandomCharacter />
            </ErrorBoundary>
            
            <div className="characters-container">
                <ErrorBoundary>
                    <CharactersList 
                        activeCharacterCard={activeCharacterCard} 
                        onCharacterCardSelected={onCharacterCardSelected}
                    />
                </ErrorBoundary>
                
                <ErrorBoundary>
                    <CharacterDetails characterId={activeCharacterCard}/>
                </ErrorBoundary>
            </div>

            <div className="bg-decoration">
                <img 
                    src={vision} 
                    alt="Vision Character in Attacking Pose" 
                    className="bg-decoration__image"
                />
            </div>
        </>
    );
}

export default CharactersPage;