import React from 'react';
import { Search } from '../components/Search';
import { test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Search component', () => {
  test('should render correctly', () => {
    render(<Search updateData={function (): void {}} setLoader={function (): void {}} />);
    const inputField = screen.getByRole('search');
    const searchButton = screen.getByRole('button', { name: 'Search' });
    expect(inputField).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('should update search text on input change', () => {
    render(<Search updateData={function (): void {}} setLoader={function (): void {}} />);
    const searchInput = screen.getByRole('search') as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');
  });

  test('should update state on input change', () => {
    render(<Search updateData={function (): void {}} setLoader={function (): void {}} />);
    const searchInput = screen.getByRole('search') as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput).toHaveValue('test');
  });

  test('should save search text to local storage on unmount', () => {
    render(<Search updateData={function (): void {}} setLoader={function (): void {}} />);
    const searchInput = screen.getByRole('search') as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput).toHaveValue('test');

    const { unmount } = render(
      <Search updateData={function (): void {}} setLoader={function (): void {}} />
    );
    unmount();

    expect(JSON.parse(JSON.stringify(localStorage.getItem('searchText')))).toBe('test');
  });

  test('should load search text from local storage on mount', () => {
    render(<Search updateData={function (): void {}} setLoader={function (): void {}} />);
    const searchInput = screen.getByRole('search') as HTMLInputElement;

    fireEvent.change(searchInput, {
      target: { value: JSON.parse(JSON.stringify(localStorage.getItem('searchText'))) },
    });

    expect(searchInput).toHaveValue('test');
  });
});
