import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import './style/main.css';
import { Provider } from 'react-redux';
import { setupStore } from './store/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
