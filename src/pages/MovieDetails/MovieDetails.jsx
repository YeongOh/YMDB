import styles from './MovieDetails.module.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CastCard from '../../components/CastCard.jsx/CastCard';
import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
} from '../../api/api';
import { useQuery } from 'react-query';
import Review from '../../components/Review/Review';

const BACKDROP_IMAGE_WIDTH = 1280;

export default function MovieDetails() {
  const { movieId } = useParams();
  const { data: movie } = useQuery(['movie', movieId], () =>
    getMovieDetails(movieId)
  );
  const { data: casts } = useQuery(['movieCasts', movieId], () =>
    getMovieCredits(movieId)
  );
  const { data: reviews } = useQuery(['movieReviews', movieId], () =>
    getMovieReviews(movieId)
  );

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
          {movie.homepage && (
            <a className={styles.a} href={movie.homepage}>
              Learn more
            </a>
          )}
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

      {reviews?.length > 0 ? (
        <section>
          <h2>Reviews</h2>
          <ul className={styles.reviews}>
            {reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </ul>
        </section>
      ) : (
        <section>
          <h2>There are no reviews about this movie yet!</h2>
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
