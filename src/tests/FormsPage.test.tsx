import React from 'react';
import { FormsPage } from '../pages/FormPage';
import { test, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('FormsPage', () => {
  test('displays the correct title page', () => {
    const { getByText } = render(<FormsPage />);
    expect(getByText('Forms')).toBeInTheDocument();
  });

  test('displays the correct title page', () => {
    const { getByText } = render(<FormsPage />);
    expect(getByText('Upload photo')).toBeInTheDocument();
  });

  test('displays the correct label', () => {
    const { getByText } = render(<FormsPage />);
    expect(getByText('Author:')).toBeInTheDocument();
    expect(getByText('Description:')).toBeInTheDocument();
    expect(getByText('Date shot:')).toBeInTheDocument();
    expect(getByText('Category:')).toBeInTheDocument();
    expect(getByText('Hide author:')).toBeInTheDocument();
    expect(getByText('Human:')).toBeInTheDocument();
  });

  test('adds a new photo to the photoArray when form is submitted', () => {
    const { getByText } = render(<FormsPage />);
    const authorInput = screen.getByRole('author-input') as HTMLInputElement;
    const descriptionInput = screen.getByRole('description-input') as HTMLInputElement;
    const dateInput = screen.getByRole('date-input') as HTMLInputElement;
    const categoryInput = screen.getByRole('category-input') as HTMLSelectElement;

    fireEvent.change(authorInput, { target: { value: 'John Doe' } });
    fireEvent.change(descriptionInput, { target: { value: 'A beautiful photo' } });
    fireEvent.change(dateInput, { target: { value: '2022-03-29' } });
    fireEvent.change(categoryInput, { target: { value: 'Landscape' } });

    expect(authorInput.value).toBe('John Doe');
    expect(descriptionInput.value).toBe('A beautiful photo');
    expect(dateInput.value).toBe('2022-03-29');
    expect(categoryInput.value).toBe('Landscape');

    fireEvent.click(getByText('Submit'));
  });
});
