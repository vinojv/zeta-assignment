/* eslint no-restricted-globals:0 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getRecipes } from '../../actions';
import CheckoutPage from '../../Pages/CheckoutPage/CheckoutPage';
import RecipeDetailsPage from '../../Pages/RecipeDetailsPage/RecipeDetailsPage';
import RecipePage from '../../Pages/RecipePage/RecipePage';
import classNames from 'classnames';
import './App.css';


class App extends Component {
  static propTypes = {
    restaurants: PropTypes.array,
    loading: PropTypes.bool,
    errorMessage: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    restaurants: [],
    loading: false,
    errorMessage: '',
    dispatch: f => f,
  };

  state = {
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    coordinates: {}, // used for current location
  };

  componentDidMount() {
    // using settimeout, because on loading of document location is not being received
    setTimeout(this.onUseMyLocation, 2000);
  }

  onUseMyLocation = () => {
    const { dispatch } = this.props;
    navigator.geolocation.getCurrentPosition((val) => {
      this.setState({
        useCurentLocation: true,
        coordinates: val.coords,
      });
      dispatch(getRecipes({
        longitude: val.coords.longitude,
        latitude: val.coords.latitude,
      }));
    });
  };

  render() {
    let {
      categories, recipes,
      loading, errorMessage, dispatch,
      cart,
    } = this.props;
    console.log(this.props);
    const favourites = recipes.filter(({ isFavourite }) => isFavourite);
    return (
      <div className="App">
        <div className='header'>
          {location.pathname !== '/' && <i className={classNames("material-icons", "backIcon")}
                                           onClick={() => {
                                             history.back();
                                           }}
          >arrow_back</i>}
          <span className='pageTitle'>Best food app</span>
        </div>
        <div className='pageContainer'>
          <Router>
            <Switch>
              <Route path={'/cart'} component={props => <CheckoutPage
                {...props}
                categories={categories}
                recipes={recipes}
                favourites={favourites}
                cart={cart}
                dispatch={dispatch}
              />}>

              </Route>

              <Route path={'/:recipeId'} component={props => <RecipeDetailsPage
                {...props}
                categories={categories}
                recipes={recipes}
                favourites={favourites}
                cart={cart}
                dispatch={dispatch}
              />}>

              </Route>

              <Route
                path={'*'}
                component={props => <RecipePage
                  {...props}
                  categories={categories}
                  recipes={recipes}
                  favourites={favourites}
                  cart={cart}
                  dispatch={dispatch}
                />}></Route>
            </Switch>
          </Router>
        </div>
        {loading && <span className='loading'> Loading... </span>}
        {errorMessage && <span className='errorMessage'> {errorMessage} </span>}
      </div>
    );
  }
}

export default connect(state => state)(App);
