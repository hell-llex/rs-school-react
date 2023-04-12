import '../style/Search.css';
import React, { ChangeEvent, useState, useEffect, useRef } from 'react';

export function Search() {
  const [searchText, setSearchText] = useState(
    localStorage.getItem('searchText')
      ? JSON.parse(JSON.stringify(localStorage.getItem('searchText')))
      : ''
  );

  const searchRef = useRef<string>('');

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    searchRef.current = searchText;
  }, [searchText]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchText', searchRef.current);
    };
  }, []);

  return (
    <div className="container-search">
      <input
        defaultValue={searchText}
        onChange={handleInput}
        type="text"
        placeholder="Search"
        className="search"
        role="search"
      />
      <button type="submit" className="btn-search">
        Search
      </button>
    </div>
  );
}
