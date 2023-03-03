import styles from './Movies.module.css';
import MovieCard from '../../components/MovieCard/MovieCard';
import { getPopularMovies } from '../../api/api';
import { useQuery } from 'react-query';

export default function Movies() {
  // TODO: add loading and error
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery('popularMovies', getPopularMovies);

  return (
    <main>
      {/* {isLoading && <div>loading...</div>} */}
      {/* {error && <div>Error</div>} */}
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
