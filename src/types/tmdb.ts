export type Movie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
};

export type PaginatedResponse<T> = {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
};

export type MovieDetails = {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    runtime: number | null;
    genres: { id: number; name: string }[];
    tagline: string;
};

export const getReleaseYear = (movie: Movie): string => movie.release_date.slice(0, 4);
