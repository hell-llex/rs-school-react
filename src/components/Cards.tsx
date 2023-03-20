import './Cards.css';
import React from 'react';
import films from '../films.json';

export function Cards() {
  return (
    <div className="container-cards">
      {films.map((film) => (
        <div className="card" key={film.filmId}>
          <div
            className="image"
            style={{
              position: 'absolute',
              background: `no-repeat center/100% url("${film.posterUrlPreview}")`,
              height: '100%',
              width: '100%',
            }}
          ></div>
          <div className="container-info">
            <div className="titleRu">{film.nameRu}</div>
            <div className="titleEn">{film.nameEn}</div>
            <div className="year">{film.year}</div>
            <div className="rating">{film.rating}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
