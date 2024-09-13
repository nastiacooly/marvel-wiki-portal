import { Comics } from "../services/useMarvelApiService";

export const isComics = (item: unknown): item is Comics => {
	return (
		!!item &&
		typeof item === "object" &&
		item.hasOwnProperty("price") &&
		item.hasOwnProperty("pages")
	);
};
