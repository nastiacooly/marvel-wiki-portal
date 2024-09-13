import { FC, useState } from "react";
import { Helmet } from "react-helmet";

import { RandomCharacter } from "../components/RandomCharacter/RandomCharacter";
import { CharacterList } from "../components/CharacterList/CharacterList";
import { CharacterDetails } from "../components/CharacterDetails/CharacterDetails";
import { CharacterSearchForm } from "../components/CharacterSearchForm/CharacterSearchForm";
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";

import vision from "../static/img/bottom_bg.png";

const CharactersPage: FC = () => {
	const [activeCharacterCardId, setActiveCharacterCardId] = useState<
		number | null
	>(null);

	const onCharacterCardSelected = (id: number) => {
		setActiveCharacterCardId(id);
	};

	return (
		<>
			<Helmet>
				<meta name="description" content="Marvel Wiki Portal - Characters" />
				<title>Marvel Wiki Portal - Characters</title>
			</Helmet>

			<ErrorBoundary>
				<RandomCharacter />
			</ErrorBoundary>

			<div className="characters-container">
				<ErrorBoundary>
					<CharacterList
						activeCharacterCardId={activeCharacterCardId}
						onCharacterCardSelected={onCharacterCardSelected}
					/>
				</ErrorBoundary>

				<div className="character-details-container">
					<ErrorBoundary>
						<CharacterDetails characterId={activeCharacterCardId} />
					</ErrorBoundary>

					<ErrorBoundary>
						<CharacterSearchForm />
					</ErrorBoundary>
				</div>
			</div>

			<div className="bg-decoration">
				<img
					src={vision}
					alt="Vision Character in Attacking Pose"
					className="bg-decoration__image"
				/>
			</div>
		</>
	);
};

export default CharactersPage;
