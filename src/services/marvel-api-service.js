import useHttp from '../hooks/http.hook';

import publicApiKey from './api-key';

const useMarvelAPIService = (initialLoadedState = false) => {
    /**
     * Custom hook to work with Marvel API.
     * Returns methods for getting characters
     * and returns corresponding state values.
     * Based on custom 'useHttp' hook.
     */
    const {loaded, error, errorMessage, request, clearError} = useHttp(initialLoadedState);

    const _apiBase = "https://gateway.marvel.com:443/v1/public";
    const _apiKeyBase = "apikey=";
    const _baseCharactersOffset = 210; /* number of characters to pass from the begginnng of the list */
    const _baseCharactersLimit = 9; /* characters per load */
    const _baseComicsLimit = 4; /* comics per load */
    const _apiUrls = {
        allCharacters: `${_apiBase}/characters?`,
        singleCharacter: `${_apiBase}/characters/`,
        allComics: `${_apiBase}/comics?`,
        singleComics: `${_apiBase}/comics/`,
    }

    const getAllCharacters = async (offset = _baseCharactersOffset) => {
        /**
         * Fetches data from Marvel API
         * on all characters (limited in _baseCharactersLimit).
         * Takes optional argument for characters offset (number).
         * Returns array with all characters with data 
         * transformed for each character.
         */
        const response = await request(
            _apiUrls.allCharacters 
            + `limit=${_baseCharactersLimit}&offset=${offset}&${_apiKeyBase}${publicApiKey}`
        );
        return response.data.results.map(_transformCharacterData);
    }

    const getCharacter = async (id) => {
        /**
         * Fetches data from Marvel API
         * on a character by its unique id.
         * Throws error in case of invalid id.
         * Returns JS-object with transformed data.
         */
        if (id.toString().length < 7) {
            throw new Error('Invalid id of a character');
        }
        const response = await request(
            _apiUrls.singleCharacter 
            + id 
            + "?" 
            + _apiKeyBase 
            + publicApiKey
            );
        const characterMainData = response.data.results[0];
        return _transformCharacterData(characterMainData);
    }

    const getAllComics = async (offset = 0) => {
        /**
         * Fetches data from Marvel API
         * on all comics (limited in _baseComicsLimit).
         * Returns array with all comics with data 
         * transformed for each comics.
         */
        const response = await request(
            _apiUrls.allComics 
            + `limit=${_baseComicsLimit}&offset=${offset}&${_apiKeyBase}${publicApiKey}`
        );

        return response.data.results.map(_transformComicsData);
    }

    const getSingleComics = async (id) => {
        /**
         * Fetches data from Marvel API
         * on a comics by its unique id.
         * Throws error in case of invalid id.
         * Returns JS-object with transformed data.
         */
        const response = await request(
            _apiUrls.singleComics 
            + id 
            + "?" 
            + _apiKeyBase 
            + publicApiKey
            );
        const comicsMainData = response.data.results[0];
        return _transformComicsData(comicsMainData);
    }

    const getCharacterComics = async (id) => {
        /**
         * Fetches data from Marvel API
         * on comics containig specific character by his unique id.
         * Throws error in case of invalid id.
         * Returns array with comics with transformed data
         * on each comics.
         */
        if (id.toString().length < 7) {
            throw new Error('Invalid id of a character');
        }
        const response = await request(
            _apiUrls.singleCharacter 
            + id 
            + "/comics?" 
            + _apiKeyBase 
            + publicApiKey
            );
            
        return response.data.results.map(_transformComicsData);
    }

    const _transformCharacterData = (character) => {
        /**
         * Receives character data object (formed by Marvel API) 
         * and returns object with transformed character data 
         */

        /* Validation of character description */
        const noDescriptionMessage = `
            Please visit Homepage or Wiki for detailed description of ${character.name}
            `;
        let description = character.description || noDescriptionMessage;

        if (description.length >= 235) {
            description = description.slice(0, 235) + "...";
        }

        return {
            id: character.id,
            name: character.name,
            description: description,
            thumbnail: character.thumbnail.path + "." + character.thumbnail.extension,
            homepage: character.urls[0].url,
            wiki: character.urls[1].url
        }
    }

    const _transformComicsData = (comics) => {
        /**
         * Receives comics data object (formed by Marvel API) 
         * and returns object with transformed data 
         */

        /* Price validation */
        const price = comics.prices[0].price ? `${comics.prices[0].price}$` : "Price Not Available";

        /* Pages validation */
        const pages = comics.pageCount ? `${comics.pageCount} pages` : "Unknown number of pages";

        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'No description available',
            price: price,
            thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
            pages: pages,
            language: comics.textObjects.language || 'en-US'
        }
    }

    return {
        _baseCharactersLimit,
        _baseCharactersOffset,
        _baseComicsLimit,
        loaded, 
        error, 
        errorMessage, 
        clearError, 
        getAllCharacters, 
        getCharacter,
        getAllComics,
        getSingleComics,
        getCharacterComics
        };
}

export default useMarvelAPIService;