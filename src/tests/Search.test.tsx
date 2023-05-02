import React from 'react';
import { Search } from '../components/Search';
import { test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { setupStore } from '../store';

const store = setupStore();
describe('Search component', () => {
  test('should render correctly', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const inputField = screen.getByRole('search');
    const searchButton = screen.getByRole('button', { name: 'Search' });
    expect(inputField).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('should update search text on input change', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const searchInput = screen.getByRole('search') as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');
  });

  test('should update state on input change', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const searchInput = screen.getByRole('search') as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput).toHaveValue('test');
  });
});
