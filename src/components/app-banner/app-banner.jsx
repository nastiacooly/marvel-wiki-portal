import './app-banner.scss';

import avengers from '../../static/img/Avengers.png';
import logo from '../../static/img/Avengers_logo.png';

const AppBanner = () => {
    return (
        <div className="banner">
            <div className="banner__image">
                <img src={avengers} alt="Avengers"/>
            </div>

            <div className="banner__text">
                <p>New comics every week!</p>
                <p>Stay tuned!</p>
            </div>

            <div className="banner__image">
                <img src={logo} alt="Avengers Logo"/>
            </div>
        </div>
    );
}

export default AppBanner;