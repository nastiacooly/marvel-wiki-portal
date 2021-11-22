import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMarvelAPIService from '../../services/marvel-api-service';

import ErrorView from '../error-view/error-view';
import Spinner from '../spinner/spinner';

import './detailed-view.scss';


const DetailedView = (props) => {
    const {id, type} = props;

    /* Initializing instances to communicate with Marvel API and work with 'loaded' and 'error' states */
    const {loaded, error, errorMessage, getCharacter, getSingleComics, clearError} = useMarvelAPIService();

    /* Component states */
    const [item, setItem] = useState(null);

    /* Component logic */
    useEffect(() => {
        getItemDetails(id);
    }, [id]);

    const onItemLoaded = (item) => {
        /**
         * Saves comics data to state
         * of this component.
         */
        setItem(item);
    }

    const getItemDetails = (id) => {
        /**
         * Gets data (object) from Marvel API on selected comics
         * and saves it to the state of this component.
         */
        clearError();

        if (type === "comics") {
            getSingleComics(id)
            .then(onItemLoaded);
        }

        if (type === "characters") {
            getCharacter(id)
            .then(onItemLoaded);
        }
        
    }

    return (<>
                <ItemDetailsView type={type} item={item}/>
                <Spinner loaded={loaded}/>
                <ErrorView error={error} errorMessage={errorMessage}/>
            </>);
}


const ItemDetailsView = ({item, type}) => {
    /**
     * Returns element with comics details.
     * If no comics chosen, returns null.
     */
    if (!item) {
        return null;
    }

    const {name, thumbnail, pages, price, description, language, homepage, wiki} = item;

    const baseClassName = `${type}-info`;

    /* Change styles for a "not found" image */
    const imageNotFound = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    let imageClassNames = "comics-info__image";
    if (thumbnail === imageNotFound) {
        imageClassNames += " comics-info__image_fill";
    }
    
    return (
        <div className={baseClassName}>
            <div className={imageClassNames}>
                <img src={thumbnail} alt={`${name}`}/>
            </div>

            <div className={`${baseClassName}__main`}>
                <h3 className={`${baseClassName}__title`}>{name}</h3>

                <article className={`${baseClassName}__description`}>
                    {description}
                </article>
                {
                    type === "comics" ?
                    <>
                        <div className={`${baseClassName}__pages`}>{pages}</div>

                        <div className={`${baseClassName}__lang`}>Language: {language}</div>

                        <span className="comics-info__price">{price}</span>
                    </>
                    :
                    <>
                    <div className={`${baseClassName}__buttons`}>
                        <a href={homepage} className="app-button app-button_main">Homepage</a>
                        <a href={wiki} className="app-button">Wiki</a>
                    </div>
                    </>
                }
                
            </div>

            <div className={`${baseClassName}__links`}>
                <Link to={type === "comics" ? '/marvel-wiki-portal/comics' : '/marvel-wiki-portal/'} className={`${baseClassName}__link`}>Back to all</Link>
            </div>
        </div>
    );
}

export default DetailedView;