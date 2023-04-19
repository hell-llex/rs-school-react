/* eslint-disable react-hooks/exhaustive-deps */
import { Photo } from '../types/type';
import '../style/Search.css';
import React, { ChangeEvent, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { updateCardSearch } from '../store/slice/searchSlice';
import { showLoader } from '../store/slice/loaderSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { saveSearchText } from '../store/slice/searchTextSlice';

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

  useEffect(() => {
    if (searchTextGlobal.text.length !== 0) isLoader(true);
  }, []);

  const onSubmit: SubmitHandler<Search> = () => {
    if (searchTextGlobal.text.length !== 0) {
      isLoader(true);
    } else if (searchTextGlobal.text.length === 0) {
      isLoader(false);
      pushCardSearch([]);
    }
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
