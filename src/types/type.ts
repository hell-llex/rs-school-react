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

export interface IFormCards {
  сards: Photo[];
  isLoading: boolean;
  error: string;
}

export type ILatestCards = IFormCards;

export type ISearchCards = IFormCards;

export interface IPopupCard {
  show: boolean;
  card?: Photo;
  error: string;
}
export interface ILoader {
  show: boolean;
  error: string;
}

export interface MyState {
  formCards?: IFormCards;
  latestCards?: ILatestCards;
  popupCard?: IPopupCard;
}
