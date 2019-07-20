import {
  ACTION_CLEAR_ERROR,
  ACTION_GET_RECIPE_DETAILS,
  ACTION_GET_RECIPE_DETAILS_ERROR,
  ACTION_GET_RECIPE_DETAILS_SUCCESS, ACTION_UPDATE_CART,
} from '../Constants';

const createReducerFromObject = (reducerFunctionsArg, initialState) => {
  const reducerFunctions = reducerFunctionsArg;
  if (!reducerFunctions.default) {
    reducerFunctions.default = state => state;
  }

  return (state, { type, payload, input }) => (reducerFunctions[type]
    || reducerFunctions.default)(state || initialState, payload, input);
};

const initialState = {
  categories: [],
  recipes: [],
  favourites: [],
  cart: {},
};

const reducerObj = {
  [ACTION_GET_RECIPE_DETAILS]: (state) => ({
    ...state,
    loading: true,
  }),
  [ACTION_CLEAR_ERROR]: (state) => ({
    ...state,
    errorMessage: '',
  }),
  [ACTION_GET_RECIPE_DETAILS_SUCCESS]: (state, payload) => ({
    ...state,
    loading: false,
    errorMessage: '',
    ...payload,
  }),
  [ACTION_GET_RECIPE_DETAILS_ERROR]: (state, payload) => ({
    ...state,
    loading: false,
    errorMessage: payload,
  }),
  [ACTION_UPDATE_CART]: (state, payload)=>({
    ...state,
      cart: {
      ...state.cart,
      [payload.name]: payload.count,
    }
  })
};

export default createReducerFromObject(reducerObj, initialState);