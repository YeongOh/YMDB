import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { TMDB_POSTER_URL } from '../../api/api';

export default function Card({ mediaType, media, slider }) {
  const { voteAverage, posterPath, releaseDate, title, name, id } = media;
  const navigate = useNavigate();

  const year = new Date(releaseDate).getFullYear();

  const handleClick = () => {
    return navigate(`/${mediaType}/${id}`);
  };

  return (
    <li
      className={`${slider ? styles.sliderCard : styles.card}`}
      onClick={handleClick}
    >
      <img
        className={styles.img}
        src={`${TMDB_POSTER_URL.w300}${posterPath}`}
        alt={title}
      />
      <div className={styles.content}>
        <div className={styles.title}>{title || name}</div>
        <div className={styles.footer}>
          <span className={styles.date}>{year}</span>
          <span className={styles.rating}>
            <FontAwesomeIcon className={styles.star} icon={faStar} />{' '}
            {voteAverage}
          </span>
        </div>
      </div>
    </li>
  );
}
