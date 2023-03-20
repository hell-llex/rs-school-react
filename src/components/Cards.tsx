import './Cards.css';
import React from 'react';
import filmsData from '../films.json';
import { FilmsProps } from '../types/type';

export class FilmCards extends React.Component<FilmsProps> {
  render() {
    const film = this.props.film;
    return (
      <div className="card">
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
    );
  }
}

export function Cards() {
  return (
    <div className="container-cards">
      {filmsData.map((film) => (
        <FilmCards key={film.filmId} film={film} />
      ))}
    </div>
  );
}
