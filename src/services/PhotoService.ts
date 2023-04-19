import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { SearchResponce } from '../types/type';

const api_key = 'd560e0c9d56293e5ebbc4d0fa57395d0';
type queryParams = { method: string; text: string; page: string; perPage: string };

export const photoApi = createApi({
  reducerPath: 'photoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.flickr.com/services/rest/' }),
  endpoints: (build) => ({
    fetchAllPhotos: build.query<SearchResponce, queryParams>({
      query: (args) => {
        const { method, text, page, perPage } = args;
        console.log('args: ', args);
        return {
          url: `?method=${method}&api_key=${api_key}&text=${text}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`,
        };
      },
    }),
  }),
});

export const { useFetchAllPhotosQuery } = photoApi;
