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

    getAllCharacters = () => {
        return this.getResource(this._apiUrlsurls.allCharacters);
    }

    getCharacter = (id) => {
        if (id.toString().length < 7) {
            throw new Error('Invalid id of a character');
        }
        return this.getResource(this._apiUrls.singleCharacter + id + "?" + this._apiKeyBase + PublicApiKey);
    }
}

export default MarvelAPIService;