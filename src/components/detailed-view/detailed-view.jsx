import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useMarvelAPIService from '../../services/marvel-api-service';

import ErrorView from '../error-view/error-view';
import Spinner from '../spinner/spinner';

import './detailed-view.scss';


const DetailedView = (props) => {
    const {id, type} = props;

    /* Initializing instances to communicate with Marvel API and work with 'loaded' and 'error' states */
    const {process, setProcess, getCharacter, getSingleComics, clearError} = useMarvelAPIService();

    /* Component states */
    const [item, setItem] = useState(null);

    /* Component logic */
    useEffect(() => {
        getItemDetails(id);
    }, [id]);

    const onItemLoaded = (item) => {
        /**
         * Saves comics/character data to state
         * of this component.
         */
        setItem(item);
    }

    const getItemDetails = (id) => {
        /**
         * Gets data (object) from Marvel API on comics/character
         * and saves it to the state of this component.
         */
        clearError();

        if (type === "comics") {
            getSingleComics(id)
            .then(onItemLoaded)
            .then(() => setProcess('success'));
        }

        if (type === "characters") {
            getCharacter(id)
            .then(onItemLoaded)
            .then(() => setProcess('success'));
        }
    }

    const setContent = (process, Component, item) => {
        switch (process) {
            case 'idle':
                return <Spinner />;
            case 'loading':
                return <Spinner />;
            case 'success':
                return <Component type={type} item={item}/>;
            case 'failure':
                return <ErrorView flex="column"/>
            default:
                throw new Error("Unexpected process state");
        }
    }

    const content = setContent(process, ItemDetailsView, item);

    return (<>
                {content}
            </>);
}


const ItemDetailsView = ({item, type}) => {
    /**
     * Returns element with comics/character details.
     * If no comics/character chosen, returns null.
     */
    if (!item) {
        return null;
    }

    const {name, thumbnail, pages, price, description, language, homepage, wiki} = item;

    const baseClassName = "item-info";

    /* Change styles for a "not found" image */
    const imageNotFound = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    let imageClassNames = `${baseClassName}__image`;
    if (thumbnail === imageNotFound) {
        imageClassNames += ` ${baseClassName}__image_fill`;
    }
    
    return (
        <div className={baseClassName}>
            <Helmet>
                <meta
                    name="description"
                    content={`Marvel Wiki Portal - ${name} details`}
                    />
                <title>{`Marvel Wiki Portal - ${name}`}</title>
            </Helmet>

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

                        <span className={`${baseClassName}__price`}>{price}</span>
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
                <Link 
                    to={type === "comics" ? '/marvel-wiki-portal/comics' : '/marvel-wiki-portal/characters'} 
                    className={`${baseClassName}__link`}>
                        Back to all
                </Link>
            </div>
        </div>
    );
}

DetailedView.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['comics', 'characters']).isRequired
}

export default DetailedView;