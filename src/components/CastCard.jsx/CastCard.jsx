import styles from './CastCard.module.css';
import baseProfile from '../../assets/baseProfile.png';
import { useState } from 'react';

export default function CastCard({ cast }) {
  const { profile_path: profilePath, name, character } = cast;
  const [imgSrc, setImgSrc] = useState(
    `https://image.tmdb.org/t/p/w185${profilePath}`
  );

  const handleError = () => setImgSrc(baseProfile);

  return (
    <li className={styles.li}>
      <img
        className={styles.img}
        src={imgSrc}
        onError={handleError}
        alt={name}
      />
      <div className={styles.name}>{name}</div>
      <div className={styles.character}>{character}</div>
    </li>
  );
}
