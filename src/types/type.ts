export interface Photo {
  author: string;
  description: string;
  date: string;
  category: string;
  hideAuthor: boolean;
  human: string | boolean;
  image: string | File[];
}

export interface PhotoProps {
  photo: Photo;
}

export interface PhotoList {
  photo: Photo[];
}
