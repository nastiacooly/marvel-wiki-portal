import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import AppBanner from '../../app-banner/app-banner';
import useMarvelAPIService from '../../../services/marvel-api-service';
import ErrorBoundary from '../../error-boundary/error-boundary';
import ErrorView from '../../error-view/error-view';
import Spinner from '../../spinner/spinner';

import './comics-details.scss';


const ComicsDetails = () => {
    let { comicsId } = useParams();

    /* Initializing instances to communicate with Marvel API and work with 'loaded' and 'error' states */
    const {loaded, error, errorMessage, getSingleComics, clearError} = useMarvelAPIService();

    /* Component states */
    const [comics, setComics] = useState(null);

    /* Component logic */
    useEffect(() => {
        getComicsDetails(comicsId);
    }, [comicsId]);

    const onComicsLoaded = (comics) => {
        /**
         * Saves comics data to state
         * of this component.
         */
        setComics(comics);
    }

    const getComicsDetails = (id) => {
        /**
         * Gets data (object) from Marvel API on selected comics
         * and saves it to the state of this component.
         */
        clearError();
        getSingleComics(id)
            .then(onComicsLoaded);
    }

    const getContent = () => {
        /**
         * Returns different content for rendering
         * depending on error and loaded status.
         */
        return (
            error ? 
                <ErrorView message={errorMessage} /> 
                : loaded ? 
                    <ComicsDetailsView comics={comics}/>
                        : <Spinner/>
        );
    }

    /* Rendering */

    const content = getContent();

    return (
        <>
            <AppBanner/>
            <ErrorBoundary>
                {content}
            </ErrorBoundary>
        </>
    );
}


const ComicsDetailsView = ({comics}) => {
    /**
     * Returns element with comics details.
     * If no comics chosen, returns null.
     */
    if (!comics) {
        return null;
    }

    const {title, thumbnail, pages, price, description, language} = comics;

    /* Change styles for a "not found" image */
    const imageNotFound = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    let imageClassNames = "comics-info__image";
    if (thumbnail === imageNotFound) {
        imageClassNames += " comics-info__image_fill";
    }
    
    return (
        <div className="comics-info">
            <div className={imageClassNames}>
                <img src={thumbnail} alt={`Cover of ${title} comics`}/>
            </div>

            <div className="comics-info__main">
                <h3 className="comics-info__title">{title}</h3>

                <article className="comics-info__description">
                    {description}
                </article>

                <div className="comics-info__pages">{pages}</div>

                <div className="comics-info__lang">Language: {language}</div>

                <span className="comics-info__price">{price}</span>
            </div>

            <div className="comics-info__links">
                <Link to="/comics" className="comics-info__link">Back to all</Link>
            </div>
        </div>
    );
}

export default ComicsDetails;