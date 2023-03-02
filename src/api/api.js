import axios from 'axios';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'en-US',
  },
});

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export async function getPopularMovies() {
  return tmdb
    .get('/popular?page=1')
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
}

export async function getMovieDetails(movieId) {
  return tmdb
    .get(`/${movieId}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function getMovieCredits(movieId) {
  return tmdb
    .get(`/${movieId}/credits?`)
    .then((response) => response.data.cast.slice(0, 8))
    .catch((error) => console.log(error));
}

export async function getMovieReviews(movieId) {
  return tmdb
    .get(`${movieId}/reviews?page=1`)
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
}

export async function getMovieImages(movieId) {
  return tmdb
    .get(`${movieId}/images`)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}
