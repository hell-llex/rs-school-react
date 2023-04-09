import { SearchResponce } from '../types/type';

const base = 'https://www.flickr.com/services/rest/';

const api_key = '413a0d1cd12c74f72c2b1a1285368548';
const searchPhotos = `${base}?method=flickr.photos.search&api_key=${api_key}`;

// шаблон запрос с ключом
const requestTemplate = async (baseUrl: string) => {
  const response = await fetch(baseUrl);
  return response;
};

// https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

// get запрос для поиска фото по тексту
export const getSearchPhotos = async (
  textSearch: string,
  page = 1,
  perPage = 100
): Promise<SearchResponce> => {
  const resp = await requestTemplate(
    `${searchPhotos}&text=${textSearch}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`
  );
  return resp.json();
};
