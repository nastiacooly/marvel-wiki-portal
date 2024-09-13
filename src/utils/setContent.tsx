import { FC } from "react";
import { Skeleton } from "../components/Skeleton/Skeleton";
import { Spinner } from "../components/Spinner/Spinner";
import { Character, Comics } from "../services/useMarvelApiService";
import { ErrorView } from "../components/ErrorView/ErrorView";

interface Props {
	character: Character | null;
	characterComics: Comics[] | null;
}

export const setContent = (
	process: string,
	character: Props["character"],
	Component: FC<Props>,
	characterComics: Props["characterComics"] = null
) => {
	switch (process) {
		case "idle":
			return characterComics ? <Skeleton /> : <Spinner />;
		case "loading":
			return <Spinner />;
		case "success":
			return (
				<Component character={character} characterComics={characterComics} />
			);
		case "failure":
			return <ErrorView flex="row" />;
		default:
			throw new Error("Unexpected process state");
	}
};

export const setListContent = (process: string, Component: FC) => {
	switch (process) {
		case "idle":
			return <Spinner />;
		case "loading":
			return (
				<>
					<Component />: <Spinner />
				</>
			);
		case "success":
			return <Component />;
		case "failure":
			return <ErrorView flex="column" />;
		default:
			throw new Error("Unexpected process state");
	}
};
