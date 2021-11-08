import './comics-details.scss';

import cover from '../../static/img/comics.png';

const ComicsDetails = (props) => {
    const {title, description, price, image, pages} = props;

    return (
        <div className="comics-info">
            <div className="comics-info__image">
                <img src={image || cover} alt="Comics Cover"/>
            </div>

            <div className="comics-info__main">
                <h3 className="comics-info__title">{title}</h3>

                <article className="comics-info__description">
                    {description}
                </article>

                <div className="comics-info__pages">{pages}</div>

                <div className="comics-info__lang">Language: en-US</div>

                <span className="comics-info__price">{price}</span>
            </div>

            <div className="comics-info__links">
                <a href="/" className="comics-info__link">Back to all</a>
            </div>

        </div>
    );
}

export default ComicsDetails;