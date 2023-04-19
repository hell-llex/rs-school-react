import React from 'react';
import { Popup } from '../components/Popup';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { setupStore } from '../store';
import { Provider } from 'react-redux';

const store = setupStore();
const popupCard = {
  show: true,
  card: {
    author: '195416326@N08',
    category: '',
    date: '',
    description: 'DSCF8117',
    hideAuthor: false,
    human: '',
    image: 'https://live.staticflickr.com/65535/52808490342_8487b1e885_b.jpg',
  },
};

describe('Search component', () => {
  test('should render correctly', () => {
    render(
      <Provider store={store}>
        <Popup photo={popupCard.card!} />
      </Provider>
    );

    const author = screen.getByRole('author') as HTMLInputElement;
    const description = screen.getByRole('description') as HTMLInputElement;
    expect(author).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
