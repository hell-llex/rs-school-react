import React from 'react';
// import ReactDOMServer from 'react-dom/server';
import { App } from './App';

// export function render() {
//   const html = ReactDOMServer.renderToString(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
//   return { html };
// }

import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
// import App from "./App";
import { Provider } from 'react-redux';
import { setupStore } from './store/index';
import './style/main.css';

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
