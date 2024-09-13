import { useState, useEffect, FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
	Character,
	Comics,
	useMarvelApiService,
} from "../../services/useMarvelApiService";

import { Spinner } from "../Spinner/Spinner";
import { ErrorView } from "../ErrorView/ErrorView";

import { HttpRequestState } from "../../hooks/useHttpRequest";
import { isComics } from "../../utils/commonUtils";

import "./DetailedView.scss";

interface Props {
	id: number;
	type: "characters" | "comics";
}

export const DetailedView: FC<Props> = ({ id, type }) => {
	/* Initializing instances to communicate with Marvel API and work with 'loaded' and 'error' states */
	const { process, setProcess, getCharacter, getSingleComics, clearError } =
		useMarvelApiService();

	/* Component states */
	const [item, setItem] = useState<Character | Comics | null>(null);

	/* Component logic */
	useEffect(() => {
		getItemDetails(id);
	}, [id]);

	const onItemLoaded = (item: Character | Comics | null) => {
		/**
		 * Saves comics/character data to state
		 * of this component.
		 */
		setItem(item);
	};

	const getItemDetails = (id: number) => {
		/**
		 * Gets data (object) from Marvel API on comics/character
		 * and saves it to the state of this component.
		 */
		clearError();

		if (type === "comics") {
			getSingleComics(id)
				.then(onItemLoaded)
				.then(() => setProcess(HttpRequestState.SUCCESS));
		}

		if (type === "characters") {
			getCharacter(id)
				.then(onItemLoaded)
				.then(() => setProcess(HttpRequestState.SUCCESS));
		}
	};

	const setContent = (process: HttpRequestState) => {
		switch (process) {
			case "idle":
				return <Spinner />;
			case "loading":
				return <Spinner />;
			case "success":
				return <ItemDetailsView item={item} />;
			case "failure":
				return <ErrorView flex="column" />;
			default:
				throw new Error("Unexpected process state");
		}
	};

	const content = setContent(process);

	return <>{content}</>;
};

interface ItemDetailsViewProps {
	item: Character | Comics | null;
}

const ItemDetailsView: FC<ItemDetailsViewProps> = ({ item }) => {
	/**
	 * Returns element with comics/character details.
	 * If no comics/character chosen, returns null.
	 */
	if (!item) {
		return null;
	}

	const { name, imgSrc, description } = item;

	const baseClassName = "item-info";

	/* Change styles for a "not found" image */
	const imageNotFoundSrc =
		"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
	let imageClassNames = `${baseClassName}__image`;
	if (imgSrc === imageNotFoundSrc) {
		imageClassNames += ` ${baseClassName}__image_fill`;
	}

	return (
		<div className={baseClassName}>
			<Helmet>
				<meta
					name="description"
					content={`Marvel Wiki Portal - ${name} details`}
				/>
				<title>{`Marvel Wiki Portal - ${name}`}</title>
			</Helmet>

			<div className={imageClassNames}>
				<img src={imgSrc} alt={`${name}`} />
			</div>

			<div className={`${baseClassName}__main`}>
				<h3 className={`${baseClassName}__title`}>{name}</h3>

				<article className={`${baseClassName}__description`}>
					{description}
				</article>

				{isComics(item) ? (
					<>
						<div className={`${baseClassName}__pages`}>{item.pages}</div>

						<div className={`${baseClassName}__lang`}>
							Language: {item.language}
						</div>

						<span className={`${baseClassName}__price`}>{item.price}</span>
					</>
				) : (
					<>
						<div className={`${baseClassName}__buttons`}>
							<a href={item.homepage} className="app-button app-button_main">
								Homepage
							</a>
							<a href={item.wiki} className="app-button">
								Wiki
							</a>
						</div>
					</>
				)}
			</div>

			<div className={`${baseClassName}__links`}>
				<Link
					to={isComics(item) ? "/comics" : "/characters"}
					className={`${baseClassName}__link`}
				>
					Back to all
				</Link>
			</div>
		</div>
	);
};
