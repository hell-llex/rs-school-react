import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomePage } from '../pages/HomePage';

const URL =
  'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=31fa894fb022e80a7ea363cb781d1692&text=bird&per_page=10&page=1&format=json&nojsoncallback=1';

const photos = {
  photos: {
    page: 1,
    pages: '7637',
    perpage: 10,
    total: '76367',
    photo: [
      {
        id: '52802998784',
        owner: '115357548@N08',
        secret: 'c0e1cc23b3',
        server: '65535',
        farm: 66,
        title: 'Male Mountain Bluebird',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
      {
        id: '52803116613',
        owner: '196264892@N08',
        secret: '1488dc56f0',
        server: '65535',
        farm: 66,
        title: 'Surf Scoter out of water',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
      {
        id: '52802104147',
        owner: '196264892@N08',
        secret: '35427cd444',
        server: '65535',
        farm: 66,
        title: 'Trumpeter Swans, Whatcom County',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
      {
        id: '52802735341',
        owner: '68466173@N02',
        secret: 'a998d5f7ce',
        server: '65535',
        farm: 66,
        title: 'Fire-fronted Serin (Serinus pusillus)',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
      {
        id: '52802172582',
        owner: '68466173@N02',
        secret: 'bd4e64712b',
        server: '65535',
        farm: 66,
        title: 'Common Pochard (Aythya ferina)',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
      {
        id: '52803052800',
        owner: '48014585@N00',
        secret: '293aa00415',
        server: '65535',
        farm: 66,
        title: 'Bohemian Waxwing',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
      {
        id: '52803056758',
        owner: '133480378@N04',
        secret: 'c7fb763f21',
        server: '65535',
        farm: 66,
        title: 'Little Blue Heron.',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
      {
        id: '52802999575',
        owner: '53978518@N00',
        secret: '3e7580232f',
        server: '65535',
        farm: 66,
        title: 'Wild Turkeys',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
      {
        id: '52802035812',
        owner: '13821431@N06',
        secret: '98323dcf88',
        server: '65535',
        farm: 66,
        title: 'DSC01344',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
      {
        id: '52802992830',
        owner: '140633124@N05',
        secret: '3c0b1e9f2d',
        server: '65535',
        farm: 66,
        title: 'B3031961',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
    ],
  },
  stat: 'ok',
};

const server = setupServer(
  rest.get(URL, (req, res, ctx) => {
    return res(ctx.json(photos));
  })
);

beforeAll(() => server.listen());

test('loads and displays greeting', async () => {
  render(<HomePage />);

  const searchInput = screen.getByRole('search') as HTMLInputElement;
  const searchButton = screen.getByRole('button', { name: 'Search' });
  const baseTextSearch = screen.getByText(
    "Either you haven't entered a text query yet or nothing is found..."
  );
  fireEvent.change(searchInput, { target: { value: 'bird' } });

  fireEvent.click(searchButton);

  await waitFor(() => {});

  expect(baseTextSearch).not.toBeInTheDocument();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
