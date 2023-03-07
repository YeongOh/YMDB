import { faBookmark as faBookmarkEmpty } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkFilled } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWatchlistContext } from '../../../context/WatchlistContext';
import styles from './WatchListButton.module.css';

export default function WatchListButton({ media, className }) {
  const { isInWatchlist, addWatchlist, removeWatchlist } =
    useWatchlistContext();
  const { id } = media;

  return (
    <>
      {isInWatchlist(id) ? (
        <button
          className={`${styles.button} ${className}`}
          type='button'
          aria-label='remove from watchlist'
          title='remove watchlist'
          onClick={(event) => {
            event.stopPropagation();
            removeWatchlist(media);
          }}
        >
          <FontAwesomeIcon
            className={styles.filledIcon}
            icon={faBookmarkFilled}
          />
        </button>
      ) : (
        <button
          className={`${styles.button} ${className}`}
          type='button'
          aria-label='add to watchlist'
          title='add watchlist'
          onClick={(event) => {
            event.stopPropagation();
            addWatchlist(media);
          }}
        >
          <FontAwesomeIcon className={styles.icon} icon={faBookmarkEmpty} />
        </button>
      )}
    </>
  );
}
