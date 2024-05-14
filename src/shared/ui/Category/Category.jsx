import PropTypes from 'prop-types';
import { useState } from 'react';

export const Category = ({ category }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={`category ${isActive ? "is-active" : ""}`}
            onClick={() => setIsActive(!isActive)}
        >
            <div className="category__image">
                <img src={category.image} alt={category.title} />
            </div>
            <div className="category__title">{category.title}</div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};