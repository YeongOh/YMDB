import styles from './MediaDetails.module.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CastCard from '../../components/CastCard/CastCard';
import {
  getMediaCredits,
  getMediaDetails,
  getMediaImages,
  getMediaRecommendations,
  getMediaReviews,
} from '../../api/api';
import { useQuery } from 'react-query';
import Review from '../../components/Review/Review';
import Gallery from '../../components/Gallery/Gallery';
import Recommendation from '../../components/Recommendation/Recommendation';

export default function MediaDetails({ mediaType }) {
  const { mediaId } = useParams();
  const { data: media } = useQuery([`${mediaType}Details`, mediaId], () =>
    getMediaDetails(mediaType, mediaId)
  );
  const { data: images } = useQuery([`${mediaType}Images`, mediaId], () =>
    getMediaImages(mediaType, mediaId)
  );
  const { data: casts } = useQuery([`${mediaType}Casts`, mediaId], () =>
    getMediaCredits(mediaType, mediaId)
  );
  const { data: recommendations } = useQuery(
    [`${mediaType}Recommendations`, mediaId],
    () => getMediaRecommendations(mediaType, mediaId)
  );
  const { data: reviewsData } = useQuery([`${mediaType}Reviews`, mediaId], () =>
    getMediaReviews(mediaType, mediaId)
  );

  const { results: reviews, total_results: reviewTotalResults } =
    reviewsData || {};

  return (
    <div className={styles.allContent}>
      <div className={styles.contentWrapper}>
        {images?.length ? <Gallery images={images} title={media?.title} /> : ''}
        {media && (
          <section>
            <h1>{media.title}</h1>{' '}
            <div className={styles.titleFooter}>
              <span>
                {new Date(
                  media.release_date || media.first_air_date
                ).getFullYear()}
              </span>
              <span>
                <FontAwesomeIcon className={styles.star} icon={faStar} />{' '}
                {media.vote_average.toFixed(1)}
              </span>
              {media.runtime && (
                <span>{`${Math.floor(media.runtime / 60)}h ${Math.floor(
                  media.runtime % 60
                )}m`}</span>
              )}
              {media.number_of_seasons && (
                <span>{`${media.number_of_seasons} Seasons`}</span>
              )}
              <span>{media.genres[0].name}</span>
            </div>
            <p className={styles.p}>{media.overview}</p>{' '}
            {media.homepage && (
              <a
                className={styles.a}
                href={media.homepage}
                target='_blank'
                rel='noopener noreferrer'
              >
                Official Site
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
          <>
            <section>
              <h2>{`${reviewTotalResults}`} Reviews</h2>
              <ul className={styles.reviews}>
                {reviews.map((review) => (
                  <Review key={review.id} review={review} />
                ))}
              </ul>
            </section>
            {/* {reviewPage < reviewTotalPages && (
              <button onClick={() => setReviewPage((prev) => prev + 1)}>
                Next
              </button>
            )} */}
          </>
        ) : (
          <section>
            <h2>There are no reviews about this movie yet!</h2>
          </section>
        )}
      </div>

      {recommendations?.length ? (
        <aside>
          <h2>Recommendations</h2>
          <ul className={styles.recommendations}>
            {recommendations.map((recommendation) => (
              <Recommendation
                key={recommendation.id}
                recommendation={recommendation}
              />
            ))}
          </ul>
        </aside>
      ) : (
        ''
      )}
    </div>
  );
}
