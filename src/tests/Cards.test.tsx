import { FilmCards, Cards } from '../components/Cards';
import { Film } from '../types/type';
import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import filmsData from '../films.json';
import '@testing-library/jest-dom/extend-expect';

describe('FilmCards component', () => {
  const film: Film = {
    filmId: 1,
    nameRu: 'Test film',
    nameEn: 'Test film (en)',
    year: '2022',
    genres: [{ genre: 'Comedy' }],
    countries: [{ country: 'USA' }],
    filmLength: '1h 30min',
    rating: '8.5',
    ratingVoteCount: 1234,
    posterUrl: 'https://example.com/poster.jpg',
    posterUrlPreview: 'https://example.com/poster-preview.jpg',
  };

  test('should render film name in Russian', () => {
    const { container } = render(<FilmCards film={film} />);
    expect(container.querySelector('.titleRu')).toHaveTextContent('Test film');
  });

  test('should render film name in English', () => {
    const { container } = render(<FilmCards film={film} />);
    expect(container.querySelector('.titleEn')).toHaveTextContent('Test film (en)');
  });

  test('should render film year', () => {
    const { container } = render(<FilmCards film={film} />);
    expect(container.querySelector('.year')).toHaveTextContent('2022');
  });

  test('should render film rating', () => {
    const { container } = render(<FilmCards film={film} />);
    expect(container.querySelector('.rating')).toHaveTextContent('8.5');
  });
});

describe('Cards component', () => {
  test('should render all films from the data file', () => {
    const { container } = render(<Cards />);
    expect(container.querySelectorAll('.card')).toHaveLength(filmsData.length);
  });
});
