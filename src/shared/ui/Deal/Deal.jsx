import PropTypes from 'prop-types';

export const Deal = ({deal}) => {
    return (
        <div className="deal">
            <div className="deal__image">
                <img src={deal.image} alt={deal.title} />
            </div>
            <div className="deal__info">
                <div className="deal__title">{deal.title}</div>
                <div className="deal__discount">{deal.discount}</div>
                <div className="deal__category">{deal.category}</div>
            </div>
        </div>
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