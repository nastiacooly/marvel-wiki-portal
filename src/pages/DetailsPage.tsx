import { useParams } from "react-router-dom";

import { AppBanner } from "../components/AppBanner/AppBanner";
import { DetailedView } from "../components/DetailedView/DetailedView";
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";

const DetailsPage = () => {
	const { id, type } = useParams();

	if (!type || !id) {
		return null;
	}

	if (type !== "characters" && type !== "comics") {
		return null;
	}

	return (
		<>
			<AppBanner />
			<ErrorBoundary>
				<DetailedView id={parseInt(id)} type={type} />
			</ErrorBoundary>
		</>
	);
};

export default DetailsPage;
