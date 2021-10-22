const ErrorView = ({message}) => {
    return (
        <div className="error-view">
            <p className="error-view__message">{message}</p>
        </div>
    );
}

export default ErrorView;