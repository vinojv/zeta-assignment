/* eslint no-restricted-globals:0 */
import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import './Favourites.css';

const favourites = ({ favourites, cart, updateCart, onClick }) => <div className='favouritesContainer'>
  <div className='favouritesHeader'>
    <div className='favouritesHeaderTitle'>
      <span className={classNames('maintitle', 'title')}> FAVOURITES </span>
      <span className='title'> Enjoy your meal </span>
    </div>
    <NavLink to={'/cart'}>
      <i className='material-icons'>local_grocery_store</i>
    </NavLink>
  </div>
  <div className='favourites'>
    {favourites.map(recipe => <RecipeCard
      onClick={onClick}
      updateCart={updateCart}
      recipe={recipe}
      cart={cart}
    />)}
  </div>
</div>;


export default favourites;
;