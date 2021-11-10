import { Link } from 'react-router-dom';

import './comics-card.scss';

const ComicsCard = (props) => {
    const {id, title, price, image} = props;

    /* Change styles for a "not found" image */
    const imageNotFound = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    let imageClassNames = "comics-card__image";
    if (image === imageNotFound) {
        imageClassNames += " comics-card__image_fill";
    }

    return (
        <li 
            className='comics-card'
            tabIndex="0"
            id={id}
        >
            <Link to={`/marvel-wiki-portal/comics/${id}`}>
                <div className={imageClassNames}>
                    <img src={image} alt={`Cover of ${title} comics`} />
                </div>

                <div className="comics-card__details">
                    <h3 className="comics-card__title">{title}</h3>
                    <span className="comics-card__price">{price}</span>
                </div>
            </Link>
        </li>
    );
}

export default ComicsCard;