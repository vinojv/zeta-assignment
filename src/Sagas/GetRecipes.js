import { delay, put, takeLatest } from 'redux-saga/effects';
import { clearMessages, getRecipesError, getRecipesSuccess } from '../actions';
import { ACTION_GET_RECIPE_DETAILS } from '../Constants';

export function queryGenerator(obj) {
  let query = Object.entries(obj).map(([key, value]) => {
    if (value && key) return `${key}=${value}`;
  }).filter(i => i);
  if (query.length === 0) return '';
  return `?${query.join('&')}`;
}

const convertToUsableFormat = businesses => ({
  id: businesses.id,
  name: businesses.name,
  location: businesses.location.display_address,
  imageUrl: businesses.image_url,
  url: businesses.url,
  closed: businesses.is_closed,
  coordinate: businesses.coordinates,
  rating: businesses.rating,
  reviewCount: businesses.review_count,
});

function* showErrorMessage() {
  yield put(getRecipesError('Not able to find any restaurant.'));
  yield delay(3000);
  yield put(clearMessages());
}

export function* getFood({ payload }) {
  try {
    const response = yield fetch('/api', {
      method: 'GET',
    })
      .then(res => {
        if (res.status !== 200)
          throw new Error();
        return res;
      })
      .then(res => res.json());
    yield put(getRecipesSuccess({
      categories: response.categories,
      recipes: response.recipes,
    }));
    // if (response.businesses.length > 0) return;

    // yield (showErrorMessage());
  } catch (e) {
    console.error(e);
    yield (showErrorMessage());

  }
}

export default function* rootSaga() {
  yield takeLatest(ACTION_GET_RECIPE_DETAILS, getFood);
}