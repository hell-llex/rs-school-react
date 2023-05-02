import fs from 'node:fs/promises';
import express from 'express';
import { ViteDevServer } from 'vite';

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Cached production assets
const templateHtml = isProduction ? await fs.readFile('./dist/client/index.html', 'utf-8') : '';

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite: ViteDevServer;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template: string;

    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8');
      template = await vite.transformIndexHtml(url, template);
    } else {
      template = templateHtml;
    }

    const html = template.split('<!--app-html-->');

    res.write(html[0]);
    const { render } = !isProduction
      ? await vite.ssrLoadModule('/src/entry-server.tsx')
      : await import('./dist/server/entry-server.js'!);
    const stream = render(req.url, {
      onShellReady() {
        res.status(200);
        stream.pipe(res);
      },
      onShellError() {
        res.status(500);
        res.send('<h1>Something went wrong</h1>');
        // do error handling
      },
      onAllReady() {
        // last thing to write
        res.status(200);
        res.write(html[1]);
        res.send();
      },
      onError(err: Error) {
        console.error(err);
      },
    });
  } catch (e) {
    vite?.ssrFixStacktrace(e as Error);
    console.log((e as Error).stack);
    res.status(500).end((e as Error).stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
