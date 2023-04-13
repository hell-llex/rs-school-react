export interface Photo {
  author: string;
  description: string;
  date: string;
  category: string;
  hideAuthor: boolean;
  human: string | boolean;
  image: string | File[];
}

export interface IPhotoApi {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export interface IPhotosApi {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: IPhotoApi[];
}

export interface SearchResponce {
  photos: IPhotosApi;
  stat: string;
}
