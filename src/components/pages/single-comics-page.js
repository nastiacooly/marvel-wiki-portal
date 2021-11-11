import { useParams } from 'react-router-dom';

import AppBanner from '../app-banner/app-banner';
import ComicsDetails from '../comics-details/comics-details';
import ErrorBoundary from '../error-boundary/error-boundary';

const SingleComicsPage = () => {
    let { comicsId } = useParams();

    return (
        <>
            <AppBanner/>
            <ErrorBoundary>
                <ComicsDetails comicsId={comicsId} />
            </ErrorBoundary>
        </>
    );
}

export default SingleComicsPage;