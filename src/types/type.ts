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

export type SearchInfo = {
  searchText: string;
};
