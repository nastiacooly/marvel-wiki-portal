import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app/app";

import "./index.scss";
import "./button.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
