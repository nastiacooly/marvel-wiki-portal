import { useParams } from 'react-router-dom';

import AppBanner from '../app-banner/app-banner';
import CharacterFound from '../character-found/character-found';
import ErrorBoundary from '../error-boundary/error-boundary';

const SingleCharacterPage = () => {
    let { characterId } = useParams();

    return (
        <>
            <AppBanner/>
            <ErrorBoundary>
                <CharacterFound characterId={characterId} />
            </ErrorBoundary>
        </>
    );
}

export default SingleCharacterPage;