import React from 'react';
import { Header } from '../components/Header';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  test('renders the title', () => {
    const title = 'Test Title';
    render(<Header title={title} />, { wrapper: MemoryRouter });
    expect(screen.getByText('This page:')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('renders the home and about links', () => {
    render(<Header title="Test Title" />, { wrapper: MemoryRouter });
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About us' })).toBeInTheDocument();
  });
});
