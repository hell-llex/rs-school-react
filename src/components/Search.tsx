import { SearchInfo } from '../types/type';
import './Search.css';
import React, { ChangeEvent } from 'react';

export class Search extends React.Component<Record<string, never>, SearchInfo> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { searchText: '' };
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
