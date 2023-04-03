export interface Film {
  filmId: number;
  nameRu: string;
  nameEn: string | null;
  year: string;
  genres: { genre: string }[];
  countries: { country: string }[];
  filmLength: string;
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface FilmsProps {
  film: Film;
}

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
