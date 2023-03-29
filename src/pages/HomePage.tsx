import React from 'react';
import '../App.css';
import data from '../photos.json';
import { Search } from '../components/Search';
import { Cards } from '../components/Cards';
import { Photo } from 'types/type';

export const homeCards: Photo[] = data;

const HomePage = () => {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <Search />
      <div>
        <Cards photo={homeCards} />
      </div>
    </div>
  );
};

export { HomePage };
