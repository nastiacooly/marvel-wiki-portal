import thor from "../../static/img/Thor.png";

import '../../button.scss';
import './random-character.scss';

const RandomCharacter = () => {
    return (
        <div className="random-character">
            <div className="random-character__image">
                <img src={thor} alt="random character" />
            </div>

            <div className="random-character__details">
                <h3 className="random-character__name">Thor</h3>
                <p className="random-character__descr">
                    As the Norse God of thunder and lightning, 
                    Thor wields one of the greatest weapons ever made, 
                    the enchanted hammer Mjolnir. 
                    While others have described Thor as an over-muscled, 
                    oafish imbecile, he's quite smart and compassionate.
                </p>
                <div className="random-character__links">
                    <a href="marvel.com" className="app-button app-button_main">Homepage</a>
                    <a href="marvel.com" className="app-button">Wiki</a>
                </div>
            </div>

        </div>
    )

}

const ChooseRandom = () => {
    return (
        <div className="random-choose">
            <p className="random-choose__text">
                Random character for today!<br/>
                Do you want to get to know him better?
            </p>

            <div>
                <p className="random-choose__text random-choose__text_margined">Or choose another one</p>
                <button className="app-button app-button_main app-button_on-dark-bg">Try It</button>
            </div>
        </div>

    );

}

const RandomSection = () => {
    return (
        <section className="random-section">
            <RandomCharacter />
            <ChooseRandom />
        </section>
    );

}

export default RandomSection;