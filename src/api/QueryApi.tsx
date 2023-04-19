/* eslint-disable react-hooks/exhaustive-deps */
import { Photo } from '../types/type';
import React, { useEffect } from 'react';
import { updateCardSearch } from '../store/slice/searchSlice';
import { showLoader } from '../store/slice/loaderSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useFetchAllPhotosQuery } from '../services/PhotoService';
import { Loader } from '../components/Loader';

const QueryApi = () => {
  const dispatch = useAppDispatch();
  const pushCardSearch = (item: Photo[]) => dispatch(updateCardSearch(item));
  const searchText = useAppSelector((state) => state.searchText);
  const isLoader = (item: boolean) => dispatch(showLoader(item));

  const { data, isLoading } = useFetchAllPhotosQuery({
    method: 'flickr.photos.search',
    text: searchText.text,
    page: '1',
    perPage: '30',
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

  return <div>{isLoading ? <Loader /> : null}</div>;
};

export { QueryApi };
