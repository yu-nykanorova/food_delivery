import { useState } from 'react';
import { Restaurant } from '../../shared/ui/Restaurant/Restaurant';
import { restaurants } from '../../database/restaurants';
import { Deal } from '../../shared/ui/Deal/Deal';
import { deals } from '../../database/deals';
import { Category } from '../../shared/ui/Category/Category';
import { categories } from '../../database/categories';

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (title) => {
    setSelectedCategory(prev => 
      prev === title ? "" : title
    );
  };

  const listDeals = deals.map((deal) => (
    <Deal deal={deal} key={deal.id} />
  ));

  const listCategories = categories.map((category) => (
    <Category
      key={category.id}
      category={category}
      isActive={selectedCategory === category.title}
      onClick={() => handleCategoryClick(category.title)}
    />
  ));

  const selectedRestaurants = selectedCategory
    ? restaurants.filter(restaurant =>
      restaurant.kitchen.some(kitchen => kitchen.name === selectedCategory)
    )
    : restaurants;

  const listRestorants = selectedRestaurants.map((restaurant) => (
    <Restaurant key={restaurant.id} restaurant={restaurant} />
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
