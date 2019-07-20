import React from 'react';
import './RecipeCard.css';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames'
const RecipeCard = ({ classes, recipe, cart, updateCart, onClick }) => {
  if (!recipe) return 'loading';
  const count = cart[recipe.name];
  const addToCart = () => {
    updateCart({
      name: recipe.name,
      count: (count || 0) + 1,
    });
  };
  return (
    <div className={classNames('recipeCardWrapper', classes.wrapper)}>
      <NavLink
        style={{
          backgroundImage: `url(${recipe.image})`,
        }}
        to={`/${recipe.name}`}
        className={classNames('recipeImage', classes.image)}>

      </NavLink>
      <div className='recipeCardFooter'>
        <div className='recipeCardFooterDetails'>
          <div className='recipeName'> {recipe.name}</div>
          <div className='recipeCost'> ₹{recipe.price}</div>
        </div>
        {!count
          ? <button className={'addButton'} onClick={addToCart}> Add to cart</button>
          : <div className='countButton'>
            <div className='addButton'
                 onClick={() => {
                   updateCart({
                     name: recipe.name,
                     count: count - 1,
                   });
                 }}
            > -
            </div>
            {count}
            <div className='addButton'
                 onClick={addToCart}
            > +
            </div>
          </div>
        }
      </div>
    </div>
  );
};
RecipeCard.defaultProps = {
  cart: {},
  classes: {},
  onClick: f => f,
};

export default RecipeCard;