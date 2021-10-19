import Loki from '../../static/img/Loki.png';

import './character-details.scss';

const comics = [
    "All-Winners Squad: Band of Heroes (2011) #3",
    "Alpha Flight (1983) #50",
    "Amazing Spider-Man (1999) #503",
    "Amazing Spider-Man (1999) #504",
    "AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)"
];

const CharacterComics = (props) => {
    return (
        <div className="character-info__single-comics">
            <p>{props.name}</p>
        </div>
    );
}

const CharacterDetails = (props) => {

    const characterComics = comics.map((item, i) => {
        return <CharacterComics key={i} name={item}/>
    });

    return (
        <div className="character-info">
            <div className="character-info__header">
                <div className="character-info__image">
                    <img src={Loki} alt="Character Portrait"/>
                </div>

                <div className="character-info__main">
                    <h3 className="character-info__name">Loki</h3>

                    <div className="character-info__links">
                        <a href="marvel.com" className="app-button app-button_main app-button_mb10">Homepage</a>
                        <a href="marvel.com" className="app-button">Wiki</a>
                    </div>
                </div>
            </div>

            <article classNam="character-info__bio">
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
            </article>

            <div className="character-info__comics">
                <h5>Comics:</h5>
                {characterComics}
            </div>

        </div>

    );

}

export default CharacterDetails;