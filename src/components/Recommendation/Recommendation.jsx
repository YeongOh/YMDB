import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { TMDB_POSTER_URL } from '../../api/api';
import styles from './Recommendation.module.css';

export default function Recommendation({ recommendation }) {
  const navigate = useNavigate();
  const {
    poster_path: posterPath,
    media_type: mediaType,
    vote_average: voteAverage,
    release_date: releaseDate,
    title,
    id,
  } = recommendation;

  const year = new Date(releaseDate).getFullYear();

  const handleClick = () => {
    return navigate(`/${mediaType}/${id}`);
  };

  return (
    <li className={styles.li} onClick={handleClick}>
      <img
        className={styles.img}
        src={`${TMDB_POSTER_URL.w154}${posterPath}`}
        alt={title}
      />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
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
