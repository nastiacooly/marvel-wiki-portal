import PublicApiKey from './api-key';

class MarvelAPIService {
    _apiBase = "https://gateway.marvel.com:443/v1/public";
    _apiKeyBase = "apikey=";
    _apiUrls = {
        allCharacters: `${this._apiBase}/characters?limit=9&offset=210&${this._apiKeyBase}${PublicApiKey}`,
        singleCharacter: `${this._apiBase}/characters/`,
    }

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        /**
         * Fetches data from Marvel API
         * on all characters.
         * Returns array with all characters with data 
         * transformed for each character.
         */
        const response = await this.getResource(this._apiUrls.allCharacters);
        return response.data.results.map(this._transformCharacterData);
    }

    getCharacter = async (id) => {
        /**
         * Fetches data from Marvel API
         * on a character by its unique id.
         * Throws error in case of invalid id.
         * Returns JS-object with transformed data.
         */
        if (id.toString().length < 7) {
            throw new Error('Invalid id of a character');
        }
        const response = await this.getResource(
            this._apiUrls.singleCharacter 
            + id 
            + "?" 
            + this._apiKeyBase 
            + PublicApiKey
            );
        const characterMainData = response.data.results[0];
        return this._transformCharacterData(characterMainData);
    }

    _transformCharacterData = (character) => {
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
}

export default MarvelAPIService;