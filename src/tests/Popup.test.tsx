import React from 'react';
import { Popup } from '../components/Popup';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// props: {
//   photo: Photo;
//   setPopupCard: (arg0: {
//       show: boolean;
//       card: Photo | undefined;
//   }) => void;
// }

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
      <Popup
        photo={popupCard.card!}
        setPopupCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    const author = screen.getByRole('author') as HTMLInputElement;
    const description = screen.getByRole('description') as HTMLInputElement;
    expect(author).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
