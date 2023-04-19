/* eslint-disable react-hooks/exhaustive-deps */
import { Photo } from '../types/type';
import { getSearchPhotos } from '.';
// import '../style/Search.css';
import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { updateCardSearch } from '../store/slice/searchSlice';
import { showLoader } from '../store/slice/loaderSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { saveSearchText } from '../store/slice/searchTextSlice';
import { photoApi, useFetchAllPhotosQuery } from '../services/PhotoService';
// import { Api } from '../api/Api';
import { Loader } from '../components/Loader';
import { Cards } from '../components/Cards';

// type Search = { search: string };

const QueryApi = () => {
  // useEffect(() => {}, []);
  const dispatch = useAppDispatch();
  const pushCardSearch = (item: Photo[]) => dispatch(updateCardSearch(item));
  const searchText = useAppSelector((state) => state.searchText);
  const isLoader = (item: boolean) => dispatch(showLoader(item));
  const searchCards = useAppSelector((state) => state.searchCard.сards);

  const { data, error, isLoading } = useFetchAllPhotosQuery({
    method: 'flickr.photos.search',
    text: searchText.text,
    page: '1',
    perPage: '10',
  });

  useEffect(() => {
    if (data && data.stat === 'ok') {
      pushCardSearch(
        data.photos.photo.map((item) => {
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
    }
    if (!isLoading && data) {
      isLoader(false);
    }
  }, [data, isLoading]);

  // if (data && data.stat === 'ok') {
  //   console.log('data :>> ', data);
  //   pushCardSearch(
  //     data.photos.photo.map((item) => {
  //       return {
  //         author: item.owner,
  //         description: item.title,
  //         date: '',
  //         category: '',
  //         hideAuthor: false,
  //         human: '',
  //         image: `https://live.staticflickr.com/${item.server}/${item.id}_${
  //           item.secret
  //         }_${'b'}.jpg`,
  //       };
  //     })
  //   );
  // }

  return <div>{isLoading ? <Loader /> : null}</div>;
};

export { QueryApi };
