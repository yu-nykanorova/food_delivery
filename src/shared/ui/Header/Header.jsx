import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [counter] = useState(4)
  return (
    <header className="header">
      <div className="header-container">
        <div className="header__left-part">
          <Link to="/" className="header__logo">
            <img src="/src/assets/logo.png" alt="logo" />
          </Link>
          <div className="header__search">
            <input type="search" placeholder="Search" />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#83859C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 14L11.1 11.1" stroke="#83859C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="header__right-part">
          <ul className="header__ul">
            <li className="header__li"><a href="/" className="header__a">Restaurants</a></li>
            <li className="header__li"><a href="/" className="header__a">Deals</a></li>
            <li className="header__li"><a href="/" className="header__a">My orders</a></li>
          </ul>
          <div className="header__cart">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 1.66666L2.5 4.99999V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V4.99999L15 1.66666H5Z" stroke="#4E60FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 5H17.5" stroke="#4E60FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.3333 8.33334C13.3333 9.2174 12.9821 10.0652 12.357 10.6904C11.7319 11.3155 10.884 11.6667 9.99999 11.6667C9.11593 11.6667 8.26809 11.3155 7.64297 10.6904C7.01785 10.0652 6.66666 9.2174 6.66666 8.33334" stroke="#4E60FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="header__cart-count">
              {counter <= 99 && counter}
              {counter > 99 && "99+"}
            </div>
          </div>
          <Link to="/settings" className="header__avatar">
            <img src="/src/assets/img/avatar.png" alt="avatar" />
          </Link>
        </div>
      </div>
    </header>
  )
}
