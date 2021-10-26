import {Component} from 'react';

import ErrorView from '../error-view/error-view';

class ErrorBoundary extends Component {
    state = {
        error: false,
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorView message="Something went wrong" />
        }

        return this.props.children;
    }
}

export default ErrorBoundary;