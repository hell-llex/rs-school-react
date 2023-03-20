import './Search.css';
import React from 'react';

export function Search() {
  return (
    <div className="container-search">
      <input type="search" name="" id="" placeholder="Search" className="search" />
      <button type="submit" className="btn-search">
        Search
      </button>
    </div>
  );
}
