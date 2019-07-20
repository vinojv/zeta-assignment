/* eslint no-restricted-globals:0 */
import React from 'react';
import { updateCart } from '../../actions';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import './RecipeDetailsPage.css';

const RecipeDetailsPage = ({ recipes, cart, dispatch }) => {
  const recipe = recipes.find(recipe => location.pathname.includes(window.encodeURI(recipe.name)));
  if (!recipe) return 'loading';
  return <div className='RecipeDetailsPageWrapper'>
    <RecipeCard
      cart={cart}
      recipe={recipe}
      updateCart={payload => dispatch(updateCart(payload))}
      classes={{
        wrapper: 'recipeDetailsPageCardWrapper',
        image: 'recipeDetailsPageCardImage',
      }}
    />
    <div className='recipeDetails'>
      <div className='recipeDetailsCategory'>
        <div className='recipeCategory'>
          Category: {recipe.category}
        </div>
        <div className='recipeRating'>
          {recipe.rating} Rating ({recipe.reviews} reviews)
        </div>
      </div>
      <p className='description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a
        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
    </div>
  </div>;
};

export default RecipeDetailsPage;