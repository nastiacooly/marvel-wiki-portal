import {Component} from 'react';

import MarvelAPIService from '../../services/marvel-api-service';

import '../../button.scss';
import './random-character.scss';

class RandomCharacter extends Component {
    constructor(props) {
        super(props);
        /* Getting random character on opening the app */
        this.getRandomCharacter();
        this.state = {
            name: null,
            description: null,
            thumbnail: null,
            homepage: null,
            wiki: null,
        }
    }

    /****
        * Initializing property for the component
        * to communicate with Marvel API
    ****/
    marvelService = new MarvelAPIService();

    getRandomCharacter = () => {
    /**** 
        * Gets data from Marvel API on random character
        * and saves it to the state of this component.
    ****/
        const maxId = 1011400;
        const minId = 1011000;
        const randomId = Math.floor(minId + Math.random() * (maxId - minId));

        this.marvelService
            .getCharacter(randomId)
            .then(result => {
                this.setState(({
                    name: result.data.results[0].name,
                    description: result.data.results[0].description,
                    thumbnail: result.data.results[0].thumbnail.path + "." + result.data.results[0].thumbnail.extension,
                    homepage: result.data.results[0].urls[0].url,
                    wiki: result.data.results[0].urls[1].url
                }));
            });
    }
    
    render() {
        const {name, description, thumbnail, homepage, wiki} = this.state;

        return (
            <section className="random-section">

                <div className="random-character">
                    <div className="random-character__image">
                        <img src={thumbnail} alt="random character" />
                    </div>
        
                    <div className="random-character__details">
                        <h3 className="random-character__name">
                            {name}
                        </h3>
                        <p className="random-character__descr">
                            {description}
                        </p>
                        <div className="random-character__links">
                            <a href={homepage} className="app-button app-button_main">Homepage</a>
                            <a href={wiki} className="app-button">Wiki</a>
                        </div>
                    </div>
                </div>

                <div className="random-choose">
                    <p className="random-choose__text">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>

                    <div>
                        <p className="random-choose__text random-choose__text_margined">Or choose another one</p>
                        <button 
                            className="app-button app-button_main app-button_on-dark-bg"
                            onClick={this.getRandomCharacter}>
                                Try It
                        </button>
                    </div>
                </div>
            
            </section>
            
        );
    }
}

export default RandomCharacter;