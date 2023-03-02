import styles from './Review.module.css';
import { useState } from 'react';
import baseProfile from '../../assets/baseProfile.png';
import TimeAgo from 'timeago-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFilled } from '@fortawesome/free-solid-svg-icons';
import {
  faStarHalfStroke as faStarHalf,
  faStar,
} from '@fortawesome/free-regular-svg-icons';

const PREVIEW_TEXT_COUNT = 500;

export default function Review({ review }) {
  const {
    author: name,
    created_at: createdAt,
    content,
    author_details,
  } = review;
  const { avatar_path: avatarPath, rating } = author_details;
  const [imgSrc, setImgSrc] = useState(
    `https://image.tmdb.org/t/p/w185${avatarPath}`
  );
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const handleError = () => setImgSrc(baseProfile);
  const ratingHalved = rating / 2 - 1;
  const previewContent = getFirstWords(content, PREVIEW_TEXT_COUNT);

  return (
    <li className={styles.li}>
      <div className={styles.header}>
        <img
          className={styles.img}
          src={imgSrc}
          onError={handleError}
          alt={name}
        />
        <div>
          <span className={styles.name}>{name}</span>{' '}
          <TimeAgo className={styles.timeago} datetime={createdAt} />
          <div>
            {[...Array(5)].map((star, index) => (
              <FontAwesomeIcon
                className={styles.star}
                key={index}
                icon={
                  index <= ratingHalved
                    ? faStarFilled
                    : index - 0.5 <= ratingHalved
                    ? faStarHalf
                    : faStar
                }
              />
            ))}
            <span className={styles.rating}>
              {rating ? ` ${rating}` : ` unrated`}
            </span>
          </div>
        </div>
      </div>
      {!isTextExpanded && (
        <>
          <p className={styles.p}>{previewContent}</p>
          {previewContent !== content && (
            <span
              className={styles.expandText}
              onClick={() => setIsTextExpanded(true)}
            >
              Read more
            </span>
          )}
        </>
      )}
      {isTextExpanded && (
        <>
          <p className={styles.p}>{content}</p>
          <span
            className={styles.expandText}
            onClick={() => setIsTextExpanded(false)}
          >
            Show less
          </span>
        </>
      )}
    </li>
  );
}

function getFirstWords(str, wordCount) {
  if (str.length <= wordCount) return str;

  //   return str.split('\n', 1)[0];
  return `${str.substring(0, wordCount)}...`;
}
