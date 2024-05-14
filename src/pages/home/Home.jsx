import React from 'react';
import { Restaurant } from '../../shared/ui/Restaurant/Restaurant';
import { restaurants } from '../../database/restaurants';
import { Deal } from '../../shared/ui/Deal/Deal';
import { deals } from '../../database/deals';
import { Category } from '../../shared/ui/Category/Category';
import { categories } from '../../database/categories';
import { Link } from 'react-router-dom';

export const Home = () => {
  const listDeals = deals.map((deal) => (
    <Link key={deal.id} to="/">
      <Deal deal={deal} />
    </Link>
  ));

  const listCategories = categories.map((category) => (
    <Category key={category.id} category={category} />
  ))

  const listRestorants = restaurants.map((restaurant) => (
    <Link key={restaurant.id} to="/">
      <Restaurant restaurant={restaurant} />
    </Link>
    ));
  
  return (
    <div className="home-container">
      <section className="deals">
        {listDeals}
      </section>
      <section className="categories">
        {listCategories}
      </section>
      <section className="restaurants">
        <div className="restaurants__title">Nearby restaurants</div>
        <div className="restaurants__list">
          {listRestorants}
        </div>
      </section>
    </div>
  )
} 
