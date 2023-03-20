// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <>
      <header className="header">
        <div className="thisPage">
          This page: <span className="page"> Home</span>
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
