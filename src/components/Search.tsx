/* eslint-disable react-hooks/exhaustive-deps */
import { IPhotosApi } from 'types/type';
import { getSearchPhotos } from '../api';
import '../style/Search.css';
import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Search = { search: string };

const Search = (props: {
  updateData: (arg0: IPhotosApi) => void;
  setLoader: (arg0: boolean) => void;
}) => {
  const [searchText, setSearchText] = useState(
    localStorage.getItem('searchText')
      ? JSON.parse(JSON.stringify(localStorage.getItem('searchText')))
      : ''
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    reset,
  } = useForm<Search>();

  const onSubmit: SubmitHandler<Search> = () => {
    if (searchText.length >= 1) {
      props.setLoader(true);
      getSearchPhotos(searchText).then((responce) => {
        props.updateData(responce.photos);
        props.setLoader(false);
      });
    }
  };

  const searchRef = useRef<string>('');

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem('searchText', searchText);
    searchRef.current = searchText;
  }, [searchText]);

  useEffect(() => {
    return () => {
      if (localStorage.getItem('searchText')) {
        props.setLoader(true);
        getSearchPhotos(JSON.parse(JSON.stringify(localStorage.getItem('searchText')))).then(
          (responce) => {
            props.updateData(responce.photos);
            props.setLoader(false);
          }
        );
      }
      localStorage.setItem('searchText', searchRef.current);
    };
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form className="search-forms-container" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('search')}
        defaultValue={searchText}
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
