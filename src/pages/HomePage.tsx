import React, { useEffect, useState } from 'react';
import '../style/HomePage.css';
import data from '../photos.json';
import { Search } from '../components/Search';
import { Cards } from '../components/Cards';
import { Photo } from '../types/type';
import { Loader } from '../components/Loader';
import { Popup } from '../components/Popup';
// import { useSelector } from 'react-redux';
import { useAppSelector } from '../hooks/redux';
import { QueryApi } from '../api/QueryApi';
// import { photoApi } from '../services/PhotoService';
// import { addCardHome } from '../store/allReducer';

export const homeCards: Photo[] = data;

const HomePage = () => {
  // const [searchCards, setSearchCards] = useState<Photo[]>([]);
  // const [formCards, setFormCards] = useState<Photo[]>([]);
  // const [loader, setLoader] = useState(false);
  const popupCard = useAppSelector((state) => state.popupCard);
  const isLoader = useAppSelector((state) => state.loader);
  const homeFormCards = useAppSelector((state) => state.formCards!.сards);
  const searchCards = useAppSelector((state) => state.searchCard.сards);

  // const [popupCard, setPopupCard] = useState<{ show: boolean; card?: Photo }>({
  //   show: false,
  //   card: {
  //     author: '',
  //     description: '',
  //     date: '',
  //     category: '',
  //     hideAuthor: false,
  //     human: '',
  //     image: '',
  //   },
  // });

  // const dispatch = useDispatch();
  // const pushCard = (item: Photo) => dispatch(addCard(item));

  // setFormCards(useSelector((state: MyState) => state.formCards.сards));

  // setFormCards(homeFormCards);
  // console.log('formCards :>> ', homeFormCards);
  // if (homeFormCards.length === 0) pushCard(data[0]);
  // setFormCards();
  // console.log('homeFormCards :>> ', homeFormCards.length);

  // const updateData = (dataSearch: IPhotosApi) => {
  //   // setSearchCards(
  //   //   dataSearch.photo.map((item) => {
  //   //     return {
  //   //       author: item.owner,
  //   //       description: item.title,
  //   //       date: '',
  //   //       category: '',
  //   //       hideAuthor: false,
  //   //       human: '',
  //   //       image: `https://live.staticflickr.com/${item.server}/${item.id}_${
  //   //         item.secret
  //   //       }_${'b'}.jpg`,
  //   //     };
  //   //   })
  //   // );
  // };
  // const textSearch = 'кот';
  // const page = '1';
  // const perPage = '100';
  // ==============================================================
  // const { data, error, isLoading } = photoApi.useFetchAllPhotosQuery({
  //   method: 'flickr.photos.search',
  //   text: textSearch,
  //   page: '1',
  //   perPage: '100',
  // });
  // console.log('data :>> ', data);
  // ==============================================================

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
        {/* <Cards
          photo={useSelector((state: MyState) => state.formCards.сards)}
          setPopupCard={setPopupCard}
        /> */}
      </div>
    </div>
  );
};

export { HomePage };
