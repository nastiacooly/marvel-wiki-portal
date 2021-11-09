import AppBanner from '../app-banner/app-banner';
import ComicsList from '../comics-list/comics-list';
import ErrorBoundary from '../error-boundary/error-boundary';

const ComicsPage = () => {
    return (
        <>
            <AppBanner/>
            <ErrorBoundary>
                <ComicsList />
            </ErrorBoundary>
        </>
    );
}

export default ComicsPage;