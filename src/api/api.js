const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export async function getPopularMovies() {
  try {
    const response = await fetch(`
      ${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`);
    if (!response.ok) throw new Error();
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    if (!response.ok) throw new Error();
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieCredits(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    if (!response.ok) throw new Error();
    const data = await response.json();
    console.log(data.cast);
    return data.cast.slice(0, 8);
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieReviews(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) throw new Error();
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
}
