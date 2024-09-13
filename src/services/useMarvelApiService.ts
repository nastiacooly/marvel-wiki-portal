import { useHttpRequest } from "../hooks/useHttpRequest";

import publicApiKey from "./api-key";

type ThumbnailType = {
	path: string;
	extension: string;
};

interface CharacterResponse {
	id: number;
	name: string;
	description: string;
	thumbnail: ThumbnailType;
	urls: Array<{ url: string }>;
}

interface ComicsResponse {
	id: number;
	title: string;
	description: string;
	prices: Array<{ price: number }>;
	thumbnail: ThumbnailType;
	pageCount: number;
}

export interface Character
	extends Pick<CharacterResponse, "id" | "name" | "description"> {
	imgSrc: string;
	homepage: string;
	wiki: string;
}

export interface Comics extends Pick<ComicsResponse, "id" | "description"> {
	name: string;
	price: string;
	imgSrc: string;
	pages: string;
	language: string;
}

/**
 * Custom hook to work with Marvel API.
 * Returns methods for getting characters
 * and returns corresponding state values.
 * Based on custom 'useHttp' hook.
 */
export const useMarvelApiService = () => {
	const { process, request, clearError, setProcess } = useHttpRequest();

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
	};

	/**
	 * Fetches data from Marvel API
	 * on all characters (limited in _baseCharactersLimit).
	 * Takes optional argument for characters offset (number).
	 * Returns array with all characters with data
	 * transformed for each character.
	 */
	const getAllCharacters = async (
		offset = _baseCharactersOffset
	): Promise<Character[]> => {
		const response = await request(
			_apiUrls.allCharacters +
				`limit=${_baseCharactersLimit}&offset=${offset}&${_apiKeyBase}${publicApiKey}`
		);
		return response.data.results.map(_transformCharacterData);
	};

	/**
	 * Fetches data from Marvel API
	 * on a character by its unique id.
	 * Throws error in case of invalid id.
	 * Returns JS-object with transformed data.
	 */
	const getCharacter = async (id: number): Promise<Character | null> => {
		if (id.toString().length < 7) {
			throw new Error("Invalid id of a character");
		}
		const response = await request(
			_apiUrls.singleCharacter + id + "?" + _apiKeyBase + publicApiKey
		);
		const characterMainData = response.data.results[0];
		return characterMainData
			? _transformCharacterData(characterMainData)
			: null;
	};

	/**
	 * Fetches data from Marvel API
	 * on a character by their name.
	 * Returns JS-object with transformed data.
	 */
	const getCharacterByName = async (
		name: string
	): Promise<Character | null> => {
		const response = await request(
			_apiUrls.allCharacters + `name=${name}` + "&" + _apiKeyBase + publicApiKey
		);
		const characterMainData = response.data.results[0];
		return characterMainData
			? _transformCharacterData(characterMainData)
			: null;
	};

	/**
	 * Fetches data from Marvel API
	 * on all comics (limited in _baseComicsLimit).
	 * Returns array with all comics with data
	 * transformed for each comics.
	 */
	const getAllComics = async (offset = 0): Promise<Comics[]> => {
		const response = await request(
			_apiUrls.allComics +
				`limit=${_baseComicsLimit}&offset=${offset}&${_apiKeyBase}${publicApiKey}`
		);

		return response.data.results.map(_transformComicsData);
	};

	/**
	 * Fetches data from Marvel API
	 * on a comics by its unique id.
	 * Throws error in case of invalid id.
	 * Returns JS-object with transformed data.
	 */
	const getSingleComics = async (id: number) => {
		const response = await request(
			_apiUrls.singleComics + id + "?" + _apiKeyBase + publicApiKey
		);
		const comicsMainData = response.data.results[0];
		return comicsMainData ? _transformComicsData(comicsMainData) : null;
	};

	/**
	 * Fetches data from Marvel API
	 * on comics containig specific character by his unique id.
	 * Throws error in case of invalid id.
	 * Returns array with comics with transformed data
	 * on each comics.
	 */
	const getCharacterComics = async (id: number): Promise<Comics[]> => {
		if (id.toString().length < 7) {
			throw new Error("Invalid id of a character");
		}
		const response = await request(
			_apiUrls.singleCharacter + id + "/comics?" + _apiKeyBase + publicApiKey
		);

		return response.data.results.map(_transformComicsData);
	};

	/**
	 * Receives character data object (formed by Marvel API)
	 * and returns object with transformed character data
	 */
	const _transformCharacterData = (character: CharacterResponse): Character => {
		/* Validation of character description */
		const noDescriptionMessage = `
            Please visit Homepage or Wiki for detailed description of ${character.name}
        `;
		let description = character.description || noDescriptionMessage;

		return {
			id: character.id,
			name: character.name,
			description: description,
			imgSrc: character.thumbnail.path + "." + character.thumbnail.extension,
			homepage: character.urls[0].url,
			wiki: character.urls[1].url,
		};
	};

	/**
	 * Receives comics data object (formed by Marvel API)
	 * and returns object with transformed data
	 */
	const _transformComicsData = (comics: ComicsResponse): Comics => {
		/* Price validation */
		const price = comics.prices[0].price
			? `${comics.prices[0].price}$`
			: "Price Not Available";

		/* Pages validation */
		const pages = comics.pageCount
			? `${comics.pageCount} pages`
			: "Unknown number of pages";

		return {
			id: comics.id,
			name: comics.title,
			description: comics.description || "No description available",
			price: price,
			imgSrc: comics.thumbnail.path + "." + comics.thumbnail.extension,
			pages: pages,
			language: "en-US",
		};
	};

	return {
		_baseCharactersLimit,
		_baseCharactersOffset,
		_baseComicsLimit,
		process,
		setProcess,
		clearError,
		getAllCharacters,
		getCharacter,
		getAllComics,
		getSingleComics,
		getCharacterComics,
		getCharacterByName,
	};
};
