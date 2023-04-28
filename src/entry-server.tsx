import React from 'react';
import { App } from './App';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from './store/index';

const store = setupStore();

export function render(url: string, opts: object) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    opts
  );
  return stream;
}
