import React from 'react';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import './CheckoutPage.css';

const CheckoutPage = ({ recipes, cart }) => (<div className={'recipePageWrapper'}>
  <div className='recipesContainer'>
    {recipes
      .filter(i => !!cart[i.name])
      .map(recipe => <RecipeCard recipe={recipe} cart={cart} />)}
  </div>
  <button className="checkoutButton">Checkout</button>
</div>);
export default CheckoutPage;