import React from 'react';
import '../style/App.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation().pathname;
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/form" className="nav-item">
          Form
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About Us
        </NavLink>
      </nav>
      <div className="thisPage">
        This page:{' '}
        <b>
          {location === '/'
            ? 'Home'
            : location === '/about'
            ? 'About us'
            : location === '/form'
            ? 'Form'
            : location === '/error-page'
            ? 'Not Found'
            : ''}
        </b>
      </div>
    </header>
  );
};

export { Header };
