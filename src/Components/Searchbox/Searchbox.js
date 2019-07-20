import * as PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Searchbox.css';

/* uses Gmap tools from showing suggestions*/
class Search extends Component {

  clearSearchBox = () => {
    const { onChange } = this.props;
    this.searchInput.value = '';
    onChange('');
  };

  render() {
    let { onChange } = this.props;
    return <div className={'searchWrapper'}>
      <i className="material-icons">search</i>
      <input
        ref={(ref) => {
          this.searchInput = ref;
        }}
        className="search"
        type="text"
        placeholder="Enter a location"
        onChange={onChange}
      />
      <i className="material-icons" onClick={this.clearSearchBox}>close</i>
    </div>;
  }
}

Search.propTypes = { onChange: PropTypes.func };

export default Search;