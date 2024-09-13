import { useState, useEffect, useMemo, FC } from "react";

import {
	Character,
	useMarvelApiService,
} from "../../services/useMarvelApiService";
import { setListContent } from "../../utils/setContent";
import { HttpRequestState } from "../../hooks/useHttpRequest";
import { CharacterCard } from "../CharacterCard/CharacterCard";

import "./CharacterList.scss";

/**
 * Helper function for CharatersList component.
 * Receives array with characters data
 * and maps it to CharacterCard elements.
 */
const mapToCharacterCards = (
	characters: Character[] | null,
	activeCardId: number | null,
	onCharacterCardSelected: (id: number) => void
) => {
	if (!characters || characters.length === 0) {
		return null;
	}

	/* Mapping characters to CharacterCard components */
	return characters.map(({ id, ...restCharacterData }) => {
		let active = id === activeCardId;
		return (
			<CharacterCard
				key={id}
				onCharacterCardSelected={onCharacterCardSelected}
				active={active}
				id={id}
				{...restCharacterData}
			/>
		);
	});
};

interface Props {
	activeCharacterCardId: number | null;
	onCharacterCardSelected: (id: number) => void;
}

export const CharacterList: FC<Props> = ({
	activeCharacterCardId,
	onCharacterCardSelected,
}) => {
	/* Initializing instances to communicate with Marvel API */
	const marvelService = useMarvelApiService();
	const baseOffset = marvelService._baseCharactersOffset;
	const charactersPerLoad = marvelService._baseCharactersLimit;
	const { process, setProcess, clearError, getAllCharacters } = marvelService;
	/* Component states */
	const [characters, setCharacters] = useState<Character[]>([]);
	const [charactersEnded, setCharactersEnded] = useState(false);
	const [offset, setOffset] = useState(baseOffset);

	/* Component logic */
	useEffect(() => {
		onLoadCharacters();
	}, []);

	const onCharactersLoaded = (newCharacters: Character[]) => {
		/**
		 * Saves newly uploaded characters data
		 * to the state of this component.
		 * And updates offset for following uploads.
		 */

		/* No "load more" button if characters ended */
		let ended = false;
		if (newCharacters.length < charactersPerLoad) {
			ended = true;
		}

		setCharacters((characters) => [...characters, ...newCharacters]);
		setCharactersEnded(ended);
		setOffset((offset) => offset + charactersPerLoad);
	};

	const onLoadCharacters = (offset?: number) => {
		/**
		 * Gets data (array) from Marvel API on additional
		 * 9 characters and saves it to the state
		 * of this component.
		 */
		clearError();

		getAllCharacters(offset)
			.then(onCharactersLoaded)
			.then(() => setProcess(HttpRequestState.SUCCESS));
	};

	/* Rendering */
	const content = useMemo(() => {
		return setListContent(process, () =>
			mapToCharacterCards(
				characters,
				activeCharacterCardId,
				onCharacterCardSelected
			)
		);
	}, [process]);

	return (
		<div className="characters-section">
			<ul className="characters-section__list">{content}</ul>

			<button
				className="app-button app-button_main app-button_wide"
				disabled={process === "loading"}
				style={{ display: charactersEnded ? "none" : "block" }}
				onClick={() => onLoadCharacters(offset)}
			>
				Load More
			</button>
		</div>
	);
};
