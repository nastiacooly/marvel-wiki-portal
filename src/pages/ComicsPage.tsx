import { Helmet } from "react-helmet";
import { FC } from "react";

import { AppBanner } from "../components/AppBanner/AppBanner";
import { ComicsList } from "../components/ComicsList/ComicsList";
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";

const ComicsPage: FC = () => {
	return (
		<>
			<Helmet>
				<meta name="description" content="Marvel Wiki Portal - Comics" />
				<title>Marvel Wiki Portal - Comics</title>
			</Helmet>

			<AppBanner />
			<ErrorBoundary>
				<ComicsList />
			</ErrorBoundary>
		</>
	);
};

export default ComicsPage;
