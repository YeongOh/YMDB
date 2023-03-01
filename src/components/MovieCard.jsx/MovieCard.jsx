import styles from './MovieCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const IMAGE_WIDTH = 300;

export default function MovieCard({ movie }) {
  const { title, poster_path, release_date, vote_average: voteAverage } = movie;
  const posterPath = `https://image.tmdb.org/t/p/w${IMAGE_WIDTH}${poster_path}`;

  const year = new Date(release_date).getFullYear();

  return (
    <div className={styles.card}>
      <img className={styles.img} src={posterPath} alt={title}></img>
      <section className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.footer}>
          <span className={styles.date}>{year}</span>
          <div>|</div>
          <span className={styles.rating}>
            <FontAwesomeIcon icon={faStar} /> {voteAverage}
          </span>
        </div>
      </section>
    </div>
  );
}
