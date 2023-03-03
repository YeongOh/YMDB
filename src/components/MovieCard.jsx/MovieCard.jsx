import styles from './MovieCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { TMDB_POSTER_URL } from '../../api/api';

export default function MovieCard({ movie }) {
  const {
    title,
    id,
    poster_path,
    release_date,
    vote_average: voteAverage,
  } = movie;
  const navigate = useNavigate();

  const posterPath = `${TMDB_POSTER_URL.w300}${poster_path}`;
  const year = new Date(release_date).getFullYear();

  const handleClick = () => {
    return navigate(`movies/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img className={styles.img} src={posterPath} alt={title}></img>
      <section className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.footer}>
          <span className={styles.date}>{year}</span>
          <span className={styles.rating}>
            <FontAwesomeIcon className={styles.star} icon={faStar} />{' '}
            {voteAverage}
          </span>
        </div>
      </section>
    </div>
  );
}
