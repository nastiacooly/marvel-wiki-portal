import { useParams } from 'react-router-dom';

import AppBanner from '../app-banner/app-banner';
import DetailedView from '../detailed-view/detailed-view';
import ErrorBoundary from '../error-boundary/error-boundary';

const DetailsPage = () => {
    let { id, type } = useParams();

    return (
        <>
            <AppBanner/>
            <ErrorBoundary>
                <DetailedView id={+id} type={type} />
            </ErrorBoundary>
        </>
    );
}

export default DetailsPage;