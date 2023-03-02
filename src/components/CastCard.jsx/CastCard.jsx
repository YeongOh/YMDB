import styles from './CastCard.module.css';
import baseProfile from '../../assets/baseProfile.png';
import { useState } from 'react';

export default function CastCard({ cast }) {
  const { name, character, profile_path } = cast;
  const [imgSrc, setImgSrc] = useState(
    `https://image.tmdb.org/t/p/w185${profile_path}`
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
      <div>{name}</div>
      <div className={styles.character}>{character}</div>
    </li>
  );
}
