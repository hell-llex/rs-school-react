import React, { useState } from 'react';
import '../style/HomePage.css';
import data from '../photos.json';
import { Search } from '../components/Search';
import { Cards } from '../components/Cards';
import { IPhotosApi, Photo } from 'types/type';

export const homeCards: Photo[] = data;

const HomePage = () => {
  const [searchCards, setSearchCards] = useState<Photo[]>([]);
  const updateData = (dataSearch: IPhotosApi) => {
    setSearchCards(
      dataSearch.photo.map((item) => {
        return {
          author: item.owner,
          description: item.title,
          date: '---',
          category: '---',
          hideAuthor: false,
          human: '0',
          image: `https://live.staticflickr.com/${item.server}/${item.id}_${
            item.secret
          }_${'m'}.jpg`,
        };
      })
    );
  };

  return (
    <div className="home-page router__page">
      <Search updateData={updateData} />
      <div>
        <h2 className="cards-container_title">Your Cards</h2>
        <Cards photo={homeCards} />
      </div>
      <div className="search-cards-container">
        <h2 className="cards-container_title">Search Cards</h2>
        {searchCards.length === 0 ? (
          <h3>Type a text query and click the search button...</h3>
        ) : (
          <Cards photo={searchCards} />
        )}
      </div>
    </div>
  );
};

export { HomePage };
