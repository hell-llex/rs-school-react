import './Search.css';
import React, { ChangeEvent } from 'react';

export class Search extends React.Component {
  state = { searchText: '' };
  constructor(props: never) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  render() {
    return (
      <div className="container-search">
        <input
          defaultValue={this.state.searchText}
          onChange={this.handleInput}
          type="text"
          placeholder="Search"
          className="search"
          role="search"
        />
        <button type="submit" className="btn-search">
          Search
        </button>
      </div>
    );
  }

  handleInput(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchText: e.target.value });
  }

  componentDidMount() {
    if (localStorage.getItem('searchText'))
      this.setState({
        searchText: JSON.parse(JSON.stringify(localStorage.getItem('searchText'))),
      });
  }

  componentWillUnmount() {
    localStorage.setItem('searchText', this.state.searchText);
  }
}
