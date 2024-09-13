import {useState, useEffect, useMemo} from 'react';

import useMarvelAPIService from '../../services/marvel-api-service';
import { setListContent } from '../../utils/setContent';

import ComicsCard from '../comics-card/comics-card';

import './comics-list.scss';


const mapToComicsCards = (comics) => {
    /**
     * Helper function for ComicsList component.
     * Receives comics array and maps it to
     * ComicsCard components.
     */
    if (!comics) {
        return null;
    }

    /* Mapping comics to ComicsCard components */
    return comics.map( ({id, name, price, thumbnail}, i) => {
        return <ComicsCard 
                    key={i} 
                    id={id}
                    name={name} 
                    image={thumbnail}
                    price={price}
                />;
    });
}

const ComicsList = () => {
    /* Initializing instances to communicate with Marvel API */
    const marvelService = useMarvelAPIService();
    const comicsPerLoad = marvelService._baseComicsLimit;
    const {process, setProcess, clearError, getAllComics} = marvelService;
    /* Component states */
    const [comics, setComics] = useState([]);
    const [comicsEnded, setComicsEnded] = useState(false);
    const [offset, setOffset] = useState(0);

    /* Component logic */
    useEffect(() => {
        onLoadComics();
    }, []);

    const onComicsLoaded = (newComics) => {
        /**
         * Saves newly uploaded comics data 
         * to the state of this component.
         * And updates offset for following uploads.
         */ 

        /* No "load more" button if characters ended */
        let ended = false;
        if (newComics.length < comicsPerLoad) {
            ended = true;
        }
        
        setComics(comics => [...comics, ...newComics]);
        setComicsEnded(ended);
        setOffset(offset => offset + comicsPerLoad);       
    }

    const onLoadComics = (offset) => {
        /**
         * Gets data (array) from Marvel API on additional
         * 8 comics and saves it to the state 
         * of this component.
         */
        clearError();

        getAllComics(offset)
            .then(onComicsLoaded)
            .then(() => setProcess('success'));
    }

    /* Rendering */
    const content = useMemo(() => {
        return setListContent(process, () => mapToComicsCards(comics));
    }, [process]);

    return (
        <div className="comics-section">
            <ul className="comics-section__list">
                {content}
            </ul>

            <button 
                className="app-button app-button_main app-button_wide"
                disabled={process === "loading"}
                style={{'display': comicsEnded ? 'none' : 'block'}}
                onClick={() => onLoadComics(offset)}
                >
                    Load More
            </button>
        </div>
        
    );
}

export default ComicsList;