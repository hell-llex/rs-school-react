import React from 'react';
import '../style/App.css';
import data from '../photos.json';
import { Search } from '../components/Search';
import { Cards } from '../components/Cards';
import { Photo } from 'types/type';

export const homeCards: Photo[] = data;

const HomePage = () => {
  return (
    <div className="home-page router__page">
      <Search />
      <div>
        <Cards photo={homeCards} />
      </div>
    </div>
  );
};

export { HomePage };
