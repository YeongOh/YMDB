import styles from './MovieCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { TMDB_POSTER_URL } from '../../api/api';

export default function MovieCard({ movie }) {
  const {
    vote_average: voteAverage,
    poster_path: posterPath,
    release_date: releaseDate,
    title,
    id,
  } = movie;
  const navigate = useNavigate();

  const year = new Date(releaseDate).getFullYear();

  const handleClick = () => {
    return navigate(`movie/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img
        className={styles.img}
        src={`${TMDB_POSTER_URL.w300}${posterPath}`}
        alt={title}
      ></img>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.footer}>
          <span className={styles.date}>{year}</span>
          <span className={styles.rating}>
            <FontAwesomeIcon className={styles.star} icon={faStar} />{' '}
            {voteAverage}
          </span>
        </div>
      </div>
    </div>
  );
}
