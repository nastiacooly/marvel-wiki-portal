import { Link } from "react-router-dom";
import { FC } from "react";
import { Comics } from "../../services/useMarvelApiService";

import "./ComicsCard.scss";

type Props = Pick<Comics, "id" | "name" | "price" | "imgSrc">;

export const ComicsCard: FC<Props> = ({ id, name, price, imgSrc }) => {
	/* Change styles for a "not found" image */
	const imageNotFoundSrc =
		"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
	let imageClassNames = "comics-card__image";
	if (imgSrc === imageNotFoundSrc) {
		imageClassNames += " comics-card__image_fill";
	}

	return (
		<li className="comics-card" tabIndex={0} id={id.toString()}>
			<Link to={`/comics/${id}`}>
				<div className={imageClassNames}>
					<img src={imgSrc} alt={`Cover of ${name} comics`} />
				</div>

				<div className="comics-card__details">
					<h3 className="comics-card__title">{name}</h3>
					<span className="comics-card__price">{price}</span>
				</div>
			</Link>
		</li>
	);
};
