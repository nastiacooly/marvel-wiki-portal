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
    const _apiUrls = {
        allCharacters: `${_apiBase}/characters?`,
        singleCharacter: `${_apiBase}/characters/`,
    }

    const getAllCharacters = async (offset = _baseCharactersOffset) => {
        /**
         * Fetches data from Marvel API
         * on all characters (limited in this._baseCharactersLimit).
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
            wiki: character.urls[1].url,
            comics: character.comics.items,
        }
    }

    return {_baseCharactersLimit,
            _baseCharactersOffset,
            loaded, 
            error, 
            errorMessage, 
            clearError, 
            getAllCharacters, 
            getCharacter};
}

export default useMarvelAPIService;