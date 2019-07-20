/* eslint no-restricted-globals:0 */

import classNames from 'classnames';
import React, { useState } from 'react';
import { updateCart } from '../../actions';
import Favourites from '../../Components/Favourites/Favourites';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import Searchbox from '../../Components/Searchbox/Searchbox';
import './RecipePage.css';

const RecipePage = ({ dispatch, categories, recipes, favourites, cart }) => {
  const [searchKey, setSearchKey] = useState('');
  const [selectedCategory, setCategory] = useState('');
  return (
    <div className={'recipePageWrapper'}>
      <Favourites
        cart={cart}
        favourites={favourites}
        onClick={(name) => {
          history.pushState(`/${name}`, location.pathname);
        }}
        updateCart={payload => dispatch(updateCart(payload))}
      />
      <Searchbox
        onChange={event => {
          setSearchKey(event.target.value);
        }}
      />
      <div className='categoriesContainer'>
        {categories && categories.map((category) => {
          return <div
            className={classNames('category', {
              'active': category.name === selectedCategory,
            })}
            onClick={() => {
              setCategory(category.name);
            }}
          >
            <img src={category.image}
                 alt='' /> {category.name} </div>;
        })}
      </div>
      <div className='recipesContainer'>
        {recipes && recipes
          .filter(i => (!selectedCategory || i.category === selectedCategory) && (!searchKey || i.name.includes(searchKey)))
          .map(recipe => <RecipeCard
            recipe={recipe}
            onClick={(name) => {
              console.log('name', name);
              history.pushState(`/${name}`, location.pathname);
            }}
            cart={cart}
            updateCart={payload => dispatch(updateCart(payload))}
          />)}
      </div>
    </div>
  );
};
export default RecipePage;