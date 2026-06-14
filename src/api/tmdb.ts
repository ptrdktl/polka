import type { MovieDetails, Movie, PaginatedResponse } from '../types/tmdb';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const tmdbFetch = async <T>(endpoint: string): Promise<T> => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
    });

    if (!res.ok) {
        throw new Error(`error: ${res.status}`);
    }

    return res.json();
};

export const getPopularMovies = (page = 1) => {
    return tmdbFetch<PaginatedResponse<Movie>>(`movie/popular?page=${page}`);
};

export const searchMovies = (query: string, page = 1) => {
    return tmdbFetch<PaginatedResponse<Movie>>(
        `search/movie?query=${encodeURIComponent(query)}&page=${page}`
    );
};

export const getMovieDetails = (id: number) => {
    return tmdbFetch<MovieDetails>(`movie/${id}`);
};

export const posterUrl = (path: string | null, size = 'w500') => {
    if (!path) {
        return null;
    }

    return `https://image.tmdb.org/t/p/${size}${path}`;
};
