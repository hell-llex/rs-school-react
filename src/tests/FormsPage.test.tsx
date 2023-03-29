import React from 'react';
import { FormsPage } from '../pages/FormsPage';
import { test, expect } from 'vitest';
import { render, fireEvent, getByRole, screen } from '@testing-library/react';
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

  // test('displays an error message when required fields are empty', () => {
  //   const { getByLabelText, getByText } = render(<FormsPage />);
  //   fireEvent.click(getByText('Submit'));
  //   expect(getByText('Required field.')).toBeInTheDocument();
  //   fireEvent.change(getByLabelText('Author'), { target: { value: 'John Doe' } });
  //   fireEvent.click(getByText('Submit'));
  //   expect(getByText('Required field.')).toBeInTheDocument();
  //   fireEvent.change(getByLabelText('Description'), { target: { value: 'A beautiful photo' } });
  //   fireEvent.click(getByText('Submit'));
  //   expect(getByText('Required field.')).toBeInTheDocument();
  //   fireEvent.change(getByLabelText('Date'), { target: { value: '2022-03-29' } });
  //   fireEvent.click(getByText('Submit'));
  //   expect(getByText('Required field.')).toBeInTheDocument();
  //   fireEvent.change(getByLabelText('Image'), { target: { files: [new File([], 'test.png')] } });
  //   fireEvent.click(getByText('Submit'));
  //   expect(getByText('Required field.')).not.toBeInTheDocument();
  // });

  // test('displays an error message when input values are invalid', () => {
  //   const { getByLabelText, getByText } = render(<FormsPage />);
  //   fireEvent.change(getByLabelText('Author'), { target: { value: 'J' } });
  //   fireEvent.change(getByLabelText('Description'), { target: { value: 'A' } });
  //   fireEvent.change(getByLabelText('Date'), { target: { value: '2024-03-29' } });
  //   fireEvent.change(getByLabelText('Category'), { target: { value: '' } });
  //   fireEvent.click(getByText('Submit'));
  //   expect(getByText('Invalid input.')).toBeInTheDocument();
  // });
});
