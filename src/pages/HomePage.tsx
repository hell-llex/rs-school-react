import React from 'react';
import '../style/HomePage.css';
import data from '../photos.json';
import { Search } from '../components/Search';
import { Cards } from '../components/Cards';
import { Photo } from '../types/type';
import { Popup } from '../components/Popup';
import { useAppSelector } from '../hooks/redux';
import { QueryApi } from '../api/QueryApi';

export const homeCards: Photo[] = data;

const HomePage = () => {
  const popupCard = useAppSelector((state) => state.popupCard);
  const isLoader = useAppSelector((state) => state.loader);
  const homeFormCards = useAppSelector((state) => state.formCards!.сards);
  const searchCards = useAppSelector((state) => state.searchCard.сards);

  return (
    <div className="home-page router__page">
      {popupCard.show && popupCard.card ? <Popup photo={popupCard.card} /> : null}
      <Search />
      <div className="search-cards-container">
        <h2 className="cards-container_title">Search Cards</h2>
        {searchCards.length === 0 && !isLoader.show ? (
          <>
            <h3>Either you haven&apos;t entered a text query yet or nothing is found...</h3>
          </>
        ) : isLoader.show ? (
          <QueryApi />
        ) : (
          <Cards photo={searchCards} />
        )}
      </div>
      <div className="your-cards-container">
        <h2 className="cards-container_title">Your Cards</h2>
        <Cards photo={homeFormCards} />
      </div>
    </div>
  );
};

export { HomePage };
