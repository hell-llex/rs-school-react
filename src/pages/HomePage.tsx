import React from 'react';
import '../App.css';
import { Header } from '../components/Header';

const HomePage = () => {
  return (
    <div className="App">
      <Header title="Home" />
      <h1>Home Page</h1>
    </div>
  );
};

export { HomePage };
