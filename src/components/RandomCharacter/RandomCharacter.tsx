import { useState, useEffect, FC } from "react";

import {
	Character,
	useMarvelApiService,
} from "../../services/useMarvelApiService";
import { setContent } from "../../utils/setContent";
import { HttpRequestState } from "../../hooks/useHttpRequest";

import "../../button.scss";
import "./RandomCharacter.scss";

export const RandomCharacter = () => {
	/* Initializing instances to communicate with Marvel API and work with 'loaded' and 'error' states */
	const { process, setProcess, getCharacter, clearError } =
		useMarvelApiService();

	/* Component states */
	const [character, setCharacter] = useState<Character | null>(null);

	/* Component logic */

	useEffect(() => {
		/* Getting random character on opening the app */
		getRandomCharacter();
	}, []);

	const onCharacterLoaded = (character: Character | null) => {
		/**
		 * Saves character data to state
		 * of this component.
		 */
		setCharacter(character);
	};

	const getRandomCharacter = () => {
		/**
		 * Gets data (object) from Marvel API on random character
		 * and saves it to the state of this component.
		 */
		clearError();
		setCharacter(null);

		const maxId = 1011400;
		const minId = 1011000;
		const randomId = Math.floor(minId + Math.random() * (maxId - minId));

		getCharacter(randomId)
			.then(onCharacterLoaded)
			.then(() => setProcess(HttpRequestState.SUCCESS));
	};

	const content = setContent(process, character, CharacterView);

	return (
		<section className="random-section">
			<div className="random-character">{content}</div>

			<div className="random-choose">
				<p className="random-choose__text">
					Random character for today!
					<br />
					Do you want to get to know him better?
				</p>

				<div>
					<p className="random-choose__text random-choose__text_margined">
						Or choose another one
					</p>
					<button
						className="app-button app-button_main app-button_on-dark-bg"
						onClick={getRandomCharacter}
					>
						Try It
					</button>
				</div>
			</div>
		</section>
	);
};

interface Props {
	character: Character | null;
}

const CharacterView: FC<Props> = ({ character }) => {
	if (!character) {
		return null;
	}

	const { name, imgSrc, description, homepage, wiki } = character;

	/* Change styles for a "not found" image */
	const imageNotFoundSrc =
		"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
	let imageClassNames = "random-character__image";
	if (imgSrc === imageNotFoundSrc) {
		imageClassNames += " random-character__image_contain";
	}

	/* Shorten long desription */
	let shortDescription = description;
	if (description.length >= 235) {
		shortDescription = description.slice(0, 235) + "...";
	}

	return (
		<>
			<div className={imageClassNames}>
				<img src={imgSrc} alt="random character" />
			</div>

			<div className="random-character__details">
				<h3 className="random-character__name">{name}</h3>
				<p className="random-character__descr">{shortDescription}</p>
				<div className="random-character__links">
					<a href={homepage} className="app-button app-button_main">
						Homepage
					</a>
					<a href={wiki} className="app-button">
						Wiki
					</a>
				</div>
			</div>
		</>
	);
};
