import { Link } from "react-router-dom";

import ErrorView from "../error-view/error-view";

const NotFoundPage = () => {
	return (
		<div>
			<ErrorView errorMessage="404 Page Not Found" />
			<Link to="/" className="app-button app-button_main app-button_wide">
				Back to Main Page
			</Link>
		</div>
	);
};

export default NotFoundPage;
