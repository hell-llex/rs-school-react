import React from 'react';
import { AboutPage } from '../pages/AboutPage';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Search component', () => {
  test('should render correctly', () => {
    render(<AboutPage />);
    const loader = screen.getByRole('loader');
    expect(loader).toBeInTheDocument();
  });
});
