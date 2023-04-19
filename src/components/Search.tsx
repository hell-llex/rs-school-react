/* eslint-disable react-hooks/exhaustive-deps */
import { Photo } from '../types/type';
import { getSearchPhotos } from '../api';
import '../style/Search.css';
import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { updateCardSearch } from '../store/slice/searchSlice';
import { showLoader } from '../store/slice/loaderSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { saveSearchText } from '../store/slice/searchTextSlice';
import { photoApi, useFetchAllPhotosQuery } from '../services/PhotoService';
import { QueryApi } from '../api/QueryApi';

type Search = { search: string };

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Search>();

  const dispatch = useAppDispatch();
  const pushCardSearch = (item: Photo[]) => dispatch(updateCardSearch(item));
  const isLoader = (item: boolean) => dispatch(showLoader(item));
  const saveSearchTextGlobal = (item: string) => dispatch(saveSearchText(item));
  const searchTextGlobal = useAppSelector((state) => state.searchText);

  const [searchText, setSearchText] = useState(searchTextGlobal.text ? searchTextGlobal.text : '');

  // const { data, error, isLoading } = useFetchAllPhotosQuery({
  //   method: 'flickr.photos.search',
  //   text: searchText,
  //   page: '1',
  //   perPage: '100',
  // });

  // if (data && data.stat === 'ok') {
  //   console.log('data :>> ', data);
  //   // pushCardSearch(
  //   //   data.photos.photo.map((item) => {
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
  // }

  // const loadingCards = (text: string) => {
  //   console.log('isLoading :>> ', isLoading);
  //   // console.log('photos :>> ', photos);
  //   console.log('error :>> ', error);
  //   loader(true);
  //   // const {
  //   //   data: photos,
  //   //   error,
  //   //   isLoading,
  //   // } = useFetchAllPhotosQuery({
  //   //   method: 'flickr.photos.search',
  //   //   text: text,
  //   //   page: '1',
  //   //   perPage: '100',
  //   // });

  //   // getSearchPhotos(text).then((responce) => {
  //   //   pushCardSearch(
  //   //     responce.photos.photo.map((item) => {
  //   //       return {
  //   //         author: item.owner,
  //   //         description: item.title,
  //   //         date: '',
  //   //         category: '',
  //   //         hideAuthor: false,
  //   //         human: '',
  //   //         image: `https://live.staticflickr.com/${item.server}/${item.id}_${
  //   //           item.secret
  //   //         }_${'b'}.jpg`,
  //   //       };
  //   //     })
  //   //   );
  //   //   loader(false);
  //   // });
  // };

  useEffect(() => {
    if (searchTextGlobal.text.length !== 0) {
      // loadingCards(searchTextGlobal.text);
      // Api(searchTextGlobal.text);
      // <Api searchText={searchTextGlobal.text} />;
      // setSearchText(searchTextGlobal.text);
      isLoader(true);
    }
  }, []);

  const onSubmit: SubmitHandler<Search> = () => {
    if (searchTextGlobal.text.length !== 0) {
      isLoader(true);
    } else if (searchTextGlobal.text.length === 0) {
      isLoader(false);
      pushCardSearch([]);
    }
    // Api(searchTextGlobal.text);
    // <Api searchText={searchTextGlobal.text} />;
    // if (saveSearchTextGlobal.length >= 1) {
    //   // loadingCards(searchText);
    //   setSearchText(searchTextGlobal.text);
    //   data && data.stat === 'ok'
    //     ? pushCardSearch(
    //         data.photos.photo.map((item) => {
    //           return {
    //             author: item.owner,
    //             description: item.title,
    //             date: '',
    //             category: '',
    //             hideAuthor: false,
    //             human: '',
    //             image: `https://live.staticflickr.com/${item.server}/${item.id}_${
    //               item.secret
    //             }_${'b'}.jpg`,
    //           };
    //         })
    //       )
    //     : null;
    // }
  };

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    saveSearchTextGlobal(e.target.value);
  }

  return (
    <form className="search-forms-container" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('search')}
        defaultValue={searchTextGlobal.text}
        onChange={handleInput}
        style={{ border: errors.search ? '1px solid red' : '0px solid white' }}
        type="text"
        placeholder="Search"
        className="search"
        role="search"
        autoComplete="none"
      />
      <input type="submit" value="Search" className="btn-search" />
    </form>
  );
};

export { Search };
