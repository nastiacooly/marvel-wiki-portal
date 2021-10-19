import {Component} from 'react';

import './character-card.scss';

class CharacterCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    onActivate = () => {
        this.setState(({active}) => ({
            active: !active
        }));
    }

    render() {
        let className = "character-card";
        if (this.state.active) {
            className += " character-card_active";
        }

        return (
            <div className={className} onClick={this.onActivate}>
                <div className="character-card__image">
                    <img src={this.props.image} alt="Comics Character Portrait" />
                </div>
    
                <div className="character-card__details">
                    <h3 className="character-card__name">{this.props.name}</h3>
                </div>
            </div>
        );
    }
}

export default CharacterCard;