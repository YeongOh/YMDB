import axios from 'axios';
import { formatMedia } from '../utils';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'en-US',
  },
});

export async function getPopular(mediaType, pageNumber = 1) {
  return tmdb
    .get(`/${mediaType}/popular?page=${pageNumber}`)
    .then((response) =>
      response.data.results.map((result) => formatMedia(result))
    )
    .catch((error) => console.log(error));
}

export async function getNowPlaying(mediaType, pageNumber = 1) {
  const query = mediaType === 'movie' ? '/now_playing?' : '/on_the_air?';
  return tmdb
    .get(`/${mediaType}${query}page=${pageNumber}`)
    .then((response) =>
      response.data.results.map((result) => formatMedia(result))
    )
    .catch((error) => console.log(error));
}

export async function getTopRated(mediaType, pageNumber = 1) {
  return tmdb
    .get(`/${mediaType}/top_rated?page=${pageNumber}`)
    .then((response) =>
      response.data.results.map((result) => formatMedia(result))
    )
    .catch((error) => console.log(error));
}

export async function getMediaDetails(mediaType, mediaId) {
  return tmdb
    .get(`/${mediaType}/${mediaId}`)
    .then((response) => formatMedia(response.data))
    .catch((error) => console.log(error));
}

export async function getMediaCredits(mediaType, mediaId) {
  return tmdb
    .get(`/${mediaType}/${mediaId}/credits?`)
    .then((response) =>
      response.data.cast.slice(0, 20).map((eachCast) => {
        return {
          id: eachCast.id,
          name: eachCast.name,
          character: eachCast.character,
          profilePath: eachCast.profile_path,
        };
      })
    )
    .catch((error) => console.log(error));
}

export async function getMediaReviews(mediaType, mediaId) {
  return tmdb
    .get(`/${mediaType}/${mediaId}/reviews?page=1`)
    .then((response) => {
      return {
        reviewTotalResults: response.data.total_results,
        reviews: response.data.results.map((result) => ({
          id: result.id,
          name: result.author,
          createdAt: result.created_at,
          content: result.content,
          authorDetails: {
            avatarPath: result.author_details.avatar_path,
            rating: result.author_details.rating,
          },
        })),
      };
    })
    .catch((error) => console.log(error));
}

export async function getMediaImages(mediaType, mediaId) {
  return tmdb
    .get(`/${mediaType}/${mediaId}/images`, { params: { language: 'null' } })
    .then((response) =>
      response.data.backdrops.slice(0, 10).map((backdrop) => {
        return { filePath: backdrop.file_path };
      })
    )
    .catch((error) => console.log(error));
}

export async function getMediaRecommendations(mediaType, mediaId) {
  return tmdb
    .get(`/${mediaType}/${mediaId}/recommendations?page=1`)
    .then((response) =>
      response.data.results.slice(0, 10).map((result) => formatMedia(result))
    )
    .catch((error) => console.log(error));
}

export async function getSearchResult(keyword, page) {
  return tmdb
    .get(`/search/movie?query=${keyword}&page=1`)
    .then((response) => {
      return {
        results: response.data.results,
        totalPages: response.data.total_pages,
      };
    })
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
