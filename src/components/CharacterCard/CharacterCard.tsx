import { FC } from "react";

import { Character } from "../../services/useMarvelApiService";

import "./CharacterCard.scss";

interface Props extends Pick<Character, "id" | "imgSrc" | "name"> {
	onCharacterCardSelected: (id: number) => void;
	active: boolean;
}

export const CharacterCard: FC<Props> = ({
	id,
	imgSrc,
	name,
	onCharacterCardSelected,
	active,
}) => {
	/* Change styles for a "not found" image */
	const imageNotFoundSrc =
		"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
	let imageClassNames = "character-card__image";
	if (imgSrc === imageNotFoundSrc) {
		imageClassNames += " character-card__image_contain";
	}

	/* Change styles for selected card */
	let classNames = active
		? "character-card character-card_active"
		: "character-card";

	return (
		<li
			className={classNames}
			tabIndex={0}
			onClick={() => onCharacterCardSelected(id)}
			onKeyDown={(e) => {
				if (e.key === " " || e.key === "Enter") {
					onCharacterCardSelected(id);
				}
			}}
		>
			<div className={imageClassNames}>
				<img src={imgSrc} alt="Comics Character Portrait" />
			</div>

			<div className="character-card__details">
				<h3 className="character-card__name">{name}</h3>
			</div>
		</li>
	);
};
