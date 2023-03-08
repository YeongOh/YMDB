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
import WatchListButton from '../../components/ui/WatchlistButton/WatchListButton';
import HorizontalScroll from 'react-horizontal-scrolling';

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

  return (
    <div className={styles.allContent}>
      <div className={styles.contentWrapper}>
        {images?.length ? <Gallery images={images} title={media?.title} /> : ''}
        {media && (
          <section className={styles.mediaSection}>
            <header className={styles.titleHeader}>
              <h1 className={styles.h1}>{media.title}</h1>{' '}
              <WatchListButton
                className={styles.watchlistButton}
                media={media}
              />
            </header>
            <div className={styles.titleFooter}>
              <span>{new Date(media.releaseDate).getFullYear()}</span>
              <span>
                <FontAwesomeIcon className={styles.star} icon={faStar} />{' '}
                {media.voteAverage.toFixed(1)}
              </span>
              {media.runtime && (
                <span>{`${Math.floor(media.runtime / 60)}h ${Math.floor(
                  media.runtime % 60
                )}m`}</span>
              )}
              {media.numberOfSeasons && (
                <span>{`${media.numberOfSeasons} Seasons`}</span>
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

            <HorizontalScroll className={styles.horizontalScroll}>
              <ul className={styles.castList}>
                {casts.map((cast) => (
                  <CastCard key={cast.id} cast={cast} />
                ))}
              </ul>
            </HorizontalScroll>
          </section>
        ) : (
          ''
        )}

        {reviewsData?.reviews?.length ? (
          <>
            <section>
              <h2>{`${reviewsData.reviewTotalResults}`} Reviews</h2>
              <ul className={styles.reviews}>
                {reviewsData.reviews.map((review) => (
                  <Review key={review.id} review={review} />
                ))}
              </ul>
            </section>
          </>
        ) : (
          <section>
            <h2>There are no reviews about this movie yet!</h2>
          </section>
        )}
      </div>

      {recommendations?.length ? (
        <aside className={styles.recommendationSection}>
          <h2 className={styles.recommendationH2}>Recommendations</h2>
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
