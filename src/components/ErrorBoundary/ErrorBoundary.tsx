import { Component, PropsWithChildren } from "react";
import { ErrorView } from "../ErrorView/ErrorView";

export class ErrorBoundary extends Component<PropsWithChildren> {
	state = {
		error: false,
	};

	componentDidCatch() {
		this.setState({
			error: true,
		});
	}

	render() {
		if (this.state.error) {
			return (
				<ErrorView message="Something went wrong. Please try again later" />
			);
		}

		return this.props.children;
	}
}
