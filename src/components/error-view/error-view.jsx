import PropTypes from 'prop-types';

import './error-view.scss';

const ErrorView = ({process, errorMessage, flex}) => {
    if (process !== "failure") {
        return null;
    }

    let className;
    switch(flex) {
        case "column":
            className = "error-view error-view_columned";
            break;
        case "row":
            className = "error-view error-view_rowed";
            break;
        default:
            className = "error-view";
    }

    return (
        <div className={className}>
            <ErrorIcon />
            <p className="error-view__message">{errorMessage}</p>
        </div>
    );
}

const ErrorIcon = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            y="0" 
            x="0" 
            xmlns="http://www.w3.org/2000/svg"
            version="1.1" 
            style={{height: '150px', width: '150px', background: 'none'}} 
            width="150px" 
            height="150px">
                <g className="ldl-scale" 
                    style={{transformOrigin: '50% 50%', transform: 'scale(0.8, 0.8)'}}>
                <g className="ldl-ani">
                <g className="ldl-layer">
                <g className="ldl-ani" 
                    style={{transformOrigin: '50px 50px', transform: 'scale(0.91)'}}>
                    <path fill="#e15b64" d="M14.653 85.487c-3.138-1.806-4.167-6.008-2.198-9.12 8.401-13.282 18.34-25.329 29.177-36.099 10.916-10.864 22.708-20.49 34.913-29.273 2.772-1.995 6.57-1.344 8.557 1.485 1.928 2.744 1.471 6.578-1.06 8.732-11.111 9.456-21.591 19.558-30.95 30.517C43.876 62.5 35.786 74.12 29.248 86.488c-1.653 3.126-5.423 4.276-8.429 2.547l-6.166-3.548z" style={{fill: 'rgb(159, 0, 19)'}}>
                    <animateTransform attributeName="transform" type="scale" dur="2s" repeatCount="indefinite" keyTimes="0; 0.5; 1" values="0.8 0.8; 1 1; 0.8 0.8"></animateTransform>
                    </path>
                </g></g>
                <g className="ldl-layer">
                <g className="ldl-ani" 
                    style={{transformOrigin: '50px 50px', transform: 'scale(0.91)'}}>
                    <path fill="#e15b64" d="M78.739 82.438c-3.067 1.804-7.041.872-8.916-2.152-6.367-10.267-14.543-19.718-23.698-28.397-9.306-8.827-19.587-16.906-30.29-24.594a6.594 6.594 0 0 1-1.682-8.948l1.23-1.895a6.609 6.609 0 0 1 9.03-2.012c11.571 7.19 22.962 14.943 33.735 23.864 10.673 8.851 20.777 18.958 29.162 30.721 2.256 3.165 1.337 7.584-2.014 9.555l-6.557 3.858z" style={{fill: 'rgb(159, 0, 19)'}}>
                    <animateTransform attributeName="transform" type="scale" dur="2s" begin="0.5s" repeatCount="indefinite" keyTimes="0; 0.5; 1" values="1 1; 0.8 0.8; 1 1"></animateTransform>
                    </path>
                </g></g>
                </g></g>
        </svg>
    );
}

ErrorView.propTypes = {
    process: PropTypes.string,
    errorMessage: PropTypes.string,
    flex: PropTypes.oneOf(['column', 'row'])
}

ErrorView.defaultProps = {
    process: "failure",
    errorMessage: "Something went wrong. Please try again later"
}

export default ErrorView;