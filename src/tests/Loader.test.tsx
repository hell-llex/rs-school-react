import React from 'react';
import { Loader } from '../components/Loader';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Search component', () => {
  test('should render correctly', () => {
    render(<Loader />);
    const loader = screen.getByRole('loader');
    expect(loader).toBeInTheDocument();
  });
});
