import {
  ACTION_CLEAR_ERROR,
  ACTION_GET_RECIPE_DETAILS,
  ACTION_GET_RECIPE_DETAILS_ERROR,
  ACTION_GET_RECIPE_DETAILS_SUCCESS,
  ACTION_UPDATE_CART,
} from '../Constants';

export const getRecipes = (payload) => ({ type: ACTION_GET_RECIPE_DETAILS, payload });
export const updateCart = (payload) => ({ type: ACTION_UPDATE_CART, payload });
export const clearMessages = (payload) => ({ type: ACTION_CLEAR_ERROR, payload });
export const getRecipesSuccess = (payload) => ({ type: ACTION_GET_RECIPE_DETAILS_SUCCESS, payload });
export const getRecipesError = (payload) => ({ type: ACTION_GET_RECIPE_DETAILS_ERROR, payload });