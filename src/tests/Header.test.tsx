import React from 'react';
import { Header } from '../components/Header';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  test('renders the home and about links', () => {
    render(<Header />, { wrapper: MemoryRouter });
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Forms' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument();
  });
});
