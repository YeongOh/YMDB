import styles from './CastCard.module.css';
import baseProfile from '../../assets/baseProfile.png';
import { TMDB_PROFILE_URL } from '../../api/api';

export default function CastCard({ cast }) {
  const { profile_path: profilePath, name, character } = cast;

  let imgSrc = baseProfile;

  if (profilePath) {
    imgSrc = `${TMDB_PROFILE_URL.w185}${profilePath}`;
  }

  return (
    <li className={styles.li}>
      <img className={styles.img} src={imgSrc} alt={name} />
      <div className={styles.name}>{name}</div>
      <div className={styles.character}>{character}</div>
    </li>
  );
}
