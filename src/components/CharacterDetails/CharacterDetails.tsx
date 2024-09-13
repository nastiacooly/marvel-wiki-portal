import { useState, useEffect, useRef, FC } from "react";
import { Link } from "react-router-dom";

import { HttpRequestState } from "../../hooks/useHttpRequest";
import {
	Character,
	Comics,
	useMarvelApiService,
} from "../../services/useMarvelApiService";
import { setContent } from "../../utils/setContent";

import "./CharacterDetails.scss";

interface Props {
	characterId: number | null;
}

export const CharacterDetails: FC<Props> = ({ characterId }) => {
	/* Ref for correct scrolling to character details component */
	const characterInfoRef = useRef<HTMLDivElement>(null);

	/* Initializing instances to communicate with Marvel API and work with its states */
	const { process, setProcess, getCharacter, getCharacterComics, clearError } =
		useMarvelApiService();

	/* Component states */
	const [character, setCharacter] = useState<Character | null>(null);
	const [characterComics, setCharacterComics] = useState<Comics[]>([]);

	/* Component logic */

	useEffect(() => {
		getCharacterDetails(characterId);
		onCharacterSelected();
	}, [characterId]);

	const onCharacterSelected = () => {
		/**
		 * Smoothly scrolls page to character info element
		 * on selection of character card.
		 */
		if (!characterInfoRef.current) {
			return;
		}

		let clientCoords = characterInfoRef.current.getBoundingClientRect();
		let scrollTop = window.scrollY + clientCoords.top;
		window.scrollTo(0, scrollTop);
	};

	const onCharacterLoaded = (character: Character | null) => {
		/**
		 * Saves character data to state
		 * of this component.
		 */
		setCharacter(character);
	};

	const onCharacterComicsLoaded = (comics: Comics[]) => {
		/**
		 * Saves character comics data to state
		 * of this component.
		 */
		setCharacterComics(comics);
	};

	const getCharacterDetails = (id: number | null) => {
		/**
		 * Gets data (object) from Marvel API on selected character
		 * and comics mentioning him
		 * and saves it to the state of this component.
		 */
		if (!id) {
			return;
		}

		clearError();
		setCharacter(null);
		setCharacterComics([]);
		getCharacter(id)
			.then(onCharacterLoaded)
			.then(() => getCharacterComics(id))
			.then(onCharacterComicsLoaded)
			.then(() => setProcess(HttpRequestState.SUCCESS));
	};

	const content = setContent(
		process,
		character,
		CharacterDetailsWholeView,
		characterComics
	);

	return (
		<div className="character-info" ref={characterInfoRef}>
			{content}
		</div>
	);
};

interface CharacterDetailsViewProps {
	character: Character | null;
}

const CharacterDetailsView: FC<CharacterDetailsViewProps> = ({ character }) => {
	/**
	 * Returns element with character details
	 * or null.
	 */
	if (!character) {
		return null;
	}

	const { name, imgSrc, description, homepage, wiki } = character;

	/* Change styles for a "not found" image */
	const imageNotFoundSrc =
		"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
	let imageClassNames = "character-info__image";
	if (imgSrc === imageNotFoundSrc) {
		imageClassNames += " character-info__image_contain";
	}

	return (
		<>
			<div className="character-info__header">
				<div className={imageClassNames}>
					<img src={imgSrc} alt="Character Portrait" />
				</div>

				<div className="character-info__main">
					<h3 className="character-info__name">{name}</h3>

					<div className="character-info__links">
						<a
							href={homepage}
							className="app-button app-button_main app-button_mb10"
						>
							Homepage
						</a>
						<a href={wiki} className="app-button">
							Wiki
						</a>
					</div>
				</div>
			</div>

			<article className="character-info__bio">{description}</article>
		</>
	);
};

interface CharacterComicsViewProps {
	characterComics: Comics[] | null;
}

const CharacterComicsView: FC<CharacterComicsViewProps> = ({
	characterComics,
}) => {
	if (!characterComics || characterComics.length === 0) {
		return null;
	}

	const comics = characterComics.map(({ id, name, imgSrc }) => {
		return (
			<li key={id} className="character-info__single-comics">
				<Link
					to={`/comics/${id}`}
					className="character-info__single-comics_on-hover"
				>
					<h6>{name}</h6>
					<div>
						<img src={imgSrc} alt={`Cover of ${name} comics`} />
					</div>
				</Link>
			</li>
		);
	});

	return (
		<>
			<h5>Comics:</h5> {comics}
		</>
	);
};

type CharacterDetailsWholeViewProps = CharacterDetailsViewProps &
	CharacterComicsViewProps;

const CharacterDetailsWholeView: FC<CharacterDetailsWholeViewProps> = ({
	character,
	characterComics,
}) => {
	return (
		<>
			<CharacterDetailsView character={character} />
			<ul className="character-info__comics">
				<CharacterComicsView characterComics={characterComics} />
			</ul>
		</>
	);
};
