import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="header">
      <div className="thisPage">
        This page: <span className="page"> {title}</span>
      </div>
      <nav className="nav">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About us
        </NavLink>
      </nav>
    </header>
  );
};

export { Header };
