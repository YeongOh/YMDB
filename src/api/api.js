import axios from 'axios';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'en-US',
  },
});

export async function getPopular(mediaType, pageNumber) {
  return tmdb
    .get(`/${mediaType}/popular?page=${pageNumber}`)
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
}

export async function getNowPlaying(mediaType, pageNumber) {
  return tmdb
    .get(`/${mediaType}/now_playing?page=${pageNumber}`)
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
}

export async function getTopRated(mediaType, pageNumber) {
  return tmdb
    .get(`/${mediaType}/top_rated?page=${pageNumber}`)
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
}

export async function getMovieDetails(movieId) {
  return tmdb
    .get(`/movie/${movieId}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function getMovieCredits(movieId) {
  return tmdb
    .get(`/movie/${movieId}/credits?`)
    .then((response) => response.data.cast.slice(0, 8))
    .catch((error) => console.log(error));
}

export async function getMovieReviews(movieId) {
  return tmdb
    .get(`/movie/${movieId}/reviews?page=1`)
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
}

export async function getMovieImages(movieId) {
  return tmdb
    .get(`/movie/${movieId}/images`, { params: { language: 'null' } })
    .then((response) => response.data.backdrops.slice(0, 5))
    .catch((error) => console.log(error));
}

export async function getMovieRecommendations(movieId) {
  return tmdb
    .get(`/movie/${movieId}/recommendations?page=1`)
    .then((response) => response.data.results.slice(0, 10))
    .catch((error) => console.log(error));
}

export const TMDB_POSTER_URL = {
  w154: 'https://image.tmdb.org/t/p/w154',
  w300: 'https://image.tmdb.org/t/p/w300',
};

export const TMDB_PROFILE_URL = {
  w45: 'https://image.tmdb.org/t/p/w45',
  w185: 'https://image.tmdb.org/t/p/w185',
};

export const TMDB_BACKDROP_URL = {
  w1280: 'https://image.tmdb.org/t/p/w1280',
};

export const MEDIA_TYPE = {
  movie: 'movie',
  tv: 'tv',
};

// "backdrop_sizes": [
//     "w300",
//     "w780",
//     "w1280",
//     "original"
//   ],
//   "logo_sizes": [
//     "w45",
//     "w92",
//     "w154",
//     "w185",
//     "w300",
//     "w500",
//     "original"
//   ],
//   "poster_sizes": [
//     "w92",
//     "w154",
//     "w185",
//     "w342",
//     "w500",
//     "w780",
//     "original"
//   ],
//   "profile_sizes": [
//     "w45",
//     "w185",
//     "h632",
//     "original"
//   ],
//   "still_sizes": [
//     "w92",
//     "w185",
//     "w300",
//     "original"
//   ]
