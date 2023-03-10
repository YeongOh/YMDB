import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { TMDB_POSTER_URL } from '../../api/api';
import WatchListButton from '../ui/WatchlistButton/WatchListButton';

export default function Card({ mediaType, media, slider }) {
  const { voteAverage, posterPath, releaseDate, title, name, id } = media;
  const navigate = useNavigate();

  const year = String(new Date(releaseDate).getFullYear());

  const handleClick = () => {
    return navigate(`/${mediaType}/${id}`);
  };

  return (
    <li
      className={`${slider ? styles.sliderCard : styles.card}`}
      onClick={handleClick}
    >
      <picture>
        <source
          media='(max-width:480px)'
          srcSet={`${TMDB_POSTER_URL.w154}${posterPath}`}
        />
        <source
          media='(max-width:700px)'
          srcSet={`${TMDB_POSTER_URL.w185}${posterPath}`}
        />
        <img
          className={styles.img}
          src={`${TMDB_POSTER_URL.w300}${posterPath}`}
          alt={title}
        />
      </picture>
      <WatchListButton media={media} className={styles.watchlistButton} />
      <div className={styles.content}>
        <div className={styles.title}>{title || name}</div>
        <div className={styles.footer}>
          <span className={styles.date}>{year}</span>
          <span className={styles.rating}>
            <FontAwesomeIcon className={styles.star} icon={faStar} />{' '}
            {voteAverage.toFixed(1)}
          </span>
        </div>
      </div>
    </li>
  );
}
