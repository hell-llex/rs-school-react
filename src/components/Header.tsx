import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import Location from './Location';

const Header = () => {
  return (
    <header className="header">
      <div className="thisPage">
        This page: <Location />
      </div>
      <nav className="nav">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About Us
        </NavLink>
      </nav>
    </header>
  );
};

export { Header };
