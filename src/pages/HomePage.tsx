import React, { useState } from 'react';
import '../style/HomePage.css';
import data from '../photos.json';
import { Search } from '../components/Search';
import { Cards } from '../components/Cards';
import { IPhotosApi, Photo } from 'types/type';
import { Loader } from '../components/Loader';
import { Popup } from '../components/Popup';

export const homeCards: Photo[] = data;

const HomePage = () => {
  const [searchCards, setSearchCards] = useState<Photo[]>([]);
  const [loader, setLoader] = useState(false);
  const [popupCard, setPopupCard] = useState<{ show: boolean; card?: Photo }>({
    show: false,
    card: {
      author: '',
      description: '',
      date: '',
      category: '',
      hideAuthor: false,
      human: '',
      image: '',
    },
  });
  const updateData = (dataSearch: IPhotosApi) => {
    setSearchCards(
      dataSearch.photo.map((item) => {
        return {
          author: item.owner,
          description: item.title,
          date: '',
          category: '',
          hideAuthor: false,
          human: '',
          image: `https://live.staticflickr.com/${item.server}/${item.id}_${
            item.secret
          }_${'b'}.jpg`,
        };
      })
    );
  };

  return (
    <div className="home-page router__page">
      {popupCard.show && popupCard.card ? (
        <Popup photo={popupCard.card!} setPopupCard={setPopupCard} />
      ) : null}
      <Search updateData={updateData} setLoader={setLoader} />
      <div className="search-cards-container">
        <h2 className="cards-container_title">Search Cards</h2>
        {searchCards.length === 0 && !loader ? (
          <>
            <h3>Either you haven&apos;t entered a text query yet or nothing is found...</h3>
          </>
        ) : loader ? (
          <Loader />
        ) : (
          <Cards photo={searchCards} setPopupCard={setPopupCard} />
        )}
      </div>
      <div className="your-cards-container">
        <h2 className="cards-container_title">Your Cards</h2>
        <Cards photo={homeCards} setPopupCard={setPopupCard} />
      </div>
    </div>
  );
};

export { HomePage };
