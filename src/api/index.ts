import { SearchResponce } from '../types/type';

const base = 'https://www.flickr.com/services/rest/';

const api_key = 'd560e0c9d56293e5ebbc4d0fa57395d0';
const searchPhotos = `${base}?method=flickr.photos.search&api_key=${api_key}`;

// шаблон запрос с ключом
const requestTemplate = async (baseUrl: string) => {
  const response = await fetch(baseUrl);
  return response;
};

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
