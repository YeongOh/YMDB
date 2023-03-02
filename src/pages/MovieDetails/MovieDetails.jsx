import styles from './MovieDetails.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import CastCard from '../../components/CastCard.jsx/CastCard';
import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
} from '../../api/api';

const BACKDROP_IMAGE_WIDTH = 1280;

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [casts, setCasts] = useState();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
    getMovieCredits(movieId).then(setCasts);
    getMovieReviews(movieId);
  }, []);

  return (
    <main className={styles.main}>
      {movie && (
        <section>
          <div className={styles.backdropWrapper}>
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w${BACKDROP_IMAGE_WIDTH}${movie.backdrop_path}`}
              alt=''
            />
          </div>
          <h1>{movie.title}</h1>{' '}
          <div className={styles.titleFooter}>
            <span>{new Date(movie.release_date).getFullYear()}</span>
            <span>
              <FontAwesomeIcon icon={faStar} /> {movie.vote_average.toFixed(1)}
            </span>
            <span>{`${Math.floor(movie.runtime / 60)}h ${Math.floor(
              movie.runtime % 60
            )}m`}</span>
            <span>{movie.genres[0].name}</span>
          </div>
          <p className={styles.p}>{movie.overview}</p>{' '}
          <a className={styles.a} href={movie.homepage}>
            Learn more
          </a>
        </section>
      )}

      {casts && (
        <section className={styles.castSection}>
          <h2>Cast</h2>
          <ul className={styles.castList}>
            {casts.map((cast) => (
              <CastCard key={cast.id} cast={cast} />
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

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
