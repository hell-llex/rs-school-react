import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FormPage } from './pages/FormPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/error-page" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/error-page" />} />
      </Routes>
    </>
  );
}

export default App;
