import styles from './MovieDetails.module.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CastCard from '../../components/CastCard/CastCard';
import {
  getMovieCredits,
  getMovieDetails,
  getMovieImages,
  getMovieRecommendations,
  getMovieReviews,
} from '../../api/api';
import { useQuery } from 'react-query';
import Review from '../../components/Review/Review';
import Gallery from '../../components/Gallery/Gallery';
import Recommendation from '../../components/Recommendation/Recommendation';

export default function MovieDetails() {
  const { movieId } = useParams();
  const { data: movie } = useQuery(['movie', movieId], () =>
    getMovieDetails(movieId)
  );
  const { data: images } = useQuery(['movieImages', movieId], () =>
    getMovieImages(movieId)
  );
  const { data: casts } = useQuery(['movieCasts', movieId], () =>
    getMovieCredits(movieId)
  );
  const { data: reviews } = useQuery(['movieReviews', movieId], () =>
    getMovieReviews(movieId)
  );

  const { data: recommendations } = useQuery(
    ['movieRecommendations', movieId],
    () => getMovieRecommendations(movieId)
  );

  return (
    <main className={styles.main}>
      <div className={styles.contentWrapper}>
        {images?.length ? <Gallery images={images} title={movie?.title} /> : ''}
        {movie && (
          <section>
            <h1>{movie.title}</h1>{' '}
            <div className={styles.titleFooter}>
              <span>{new Date(movie.release_date).getFullYear()}</span>
              <span>
                <FontAwesomeIcon className={styles.star} icon={faStar} />{' '}
                {movie.vote_average.toFixed(1)}
              </span>
              <span>{`${Math.floor(movie.runtime / 60)}h ${Math.floor(
                movie.runtime % 60
              )}m`}</span>
              <span>{movie.genres[0].name}</span>
            </div>
            <p className={styles.p}>{movie.overview}</p>{' '}
            {movie.homepage && (
              <a
                className={styles.a}
                href={movie.homepage}
                target='_blank'
                rel='noopener noreferrer'
              >
                Learn more
              </a>
            )}
          </section>
        )}

        {casts?.length ? (
          <section className={styles.castSection}>
            <h2>Cast</h2>
            <ul className={styles.castList}>
              {casts.map((cast) => (
                <CastCard key={cast.id} cast={cast} />
              ))}
            </ul>
          </section>
        ) : (
          ''
        )}

        {reviews?.length ? (
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
      </div>

      {recommendations?.length ? (
        <aisde>
          <h2>Recommendations</h2>
          <ul className={styles.recommendations}>
            {recommendations.map((recommendation) => (
              <Recommendation
                key={recommendation.id}
                recommendation={recommendation}
              />
            ))}
          </ul>
        </aisde>
      ) : (
        ''
      )}
    </main>
  );
}
