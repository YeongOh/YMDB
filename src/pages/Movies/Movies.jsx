import { useEffect, useState } from 'react';
import styles from './Movies.module.css';
import MovieCard from '../../components/MovieCard.jsx/MovieCard';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        if (!response.ok) throw new Error();
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      {isLoading && <div>loading...</div>}
      {error && <div>Error</div>}
      {movies?.length && (
        <ul className={styles.ul}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </main>
  );
}
