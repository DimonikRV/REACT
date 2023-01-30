import React from 'react';

class Search extends React.Component {
  state = {
    value: '',
  };
  onChangeHandler = event => {
    this.setState({
      value: event.target.value,
    });
  };
  onSubmit = event => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };
  render() {
    return (
      <form className="search" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="search__input"
          value={this.state.value}
          onChange={this.onChangeHandler}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}
export default Search;
