import React from 'react';
import '../App.css';
import { Search } from '../components/Search';
import { Cards } from '../components/Cards';

const HomePage = () => {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <Search />
      <div>
        <Cards />
      </div>
    </div>
  );
};

export { HomePage };
