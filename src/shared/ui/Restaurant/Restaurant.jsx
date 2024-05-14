import PropTypes from "prop-types";

export const Restaurant = ({ restaurant }) => {

    return (
        <div className="restaurant"> 
            <div className="restaurant__image">
                <img src={restaurant.image} alt={restaurant.title} />
                {restaurant.isFeatured && <div className="featured">FEATURED</div>}
            </div>
            <div className="restaurant__info">
                <div className="restaurant__title">
                    {restaurant.title}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1.66666L2.5 4.99999V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V4.99999L15 1.66666H5Z" stroke="#4E60FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.5 5H17.5" stroke="#4E60FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.3333 8.33334C13.3333 9.2174 12.9821 10.0652 12.357 10.6904C11.7319 11.3155 10.884 11.6667 9.99999 11.6667C9.11593 11.6667 8.26809 11.3155 7.64297 10.6904C7.01785 10.0652 6.66666 9.2174 6.66666 8.33334" stroke="#C7C8D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="restaurant__estim">
                    <div className="delivery-time">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_5201_414)">
<path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#C7C8D2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 3V6L8 7" stroke="#C7C8D2" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_5201_414">
                            <rect width="12" height="12" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        {restaurant.timeDelivery} min
                    </div>
                    <div className="minimal-invoice">${restaurant.minInvoice} min sum</div>
                </div>
                <div className="restaurant__kitchen">
                    {restaurant.kitchen.map((item, index) => (
                        <div key={index}>
                            {item.emoji && <img src={item.emoji} alt={item.name} />} {item.name}
                        </div>
                    ))}                        
                </div>
            </div>
        </div>
    )
}

Restaurant.propTypes = {
    restaurant: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        timeDelivery: PropTypes.string.isRequired,
        minInvoice: PropTypes.string.isRequired,
        isFeatured: PropTypes.bool.isRequired,
        kitchen: PropTypes.arrayOf(
            PropTypes.shape ({
                emoji: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

