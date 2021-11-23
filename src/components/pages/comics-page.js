import { Helmet } from 'react-helmet';

import AppBanner from '../app-banner/app-banner';
import ComicsList from '../comics-list/comics-list';
import ErrorBoundary from '../error-boundary/error-boundary';

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel Wiki Portal - Comics"
                    />
                <title>Marvel Wiki Portal - Comics</title>
            </Helmet>

            <AppBanner/>
            <ErrorBoundary>
                <ComicsList />
            </ErrorBoundary>
        </>
    );
}

export default ComicsPage;