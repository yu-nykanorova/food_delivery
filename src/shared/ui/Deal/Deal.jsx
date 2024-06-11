import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Deal = ({deal}) => {
    return (
        <Link to="/" className="deal">
            <div className="deal__image">
                <img src={deal.image} alt={deal.title} />
            </div>
            <div className="deal__info">
                <div className="deal__info-subcontainer">
                    <div className="deal__title">{deal.title}</div>
                    <div className="deal__discount">{deal.discount}</div>
                </div>
                <div className="deal__category">{deal.category}</div>
            </div>
        </Link>
    )
}

Deal.propTypes = {
    deal: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        discount: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
};