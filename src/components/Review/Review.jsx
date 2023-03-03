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
import { TMDB_PROFILE_URL } from '../../api/api';

const PREVIEW_TEXT_COUNT = 500;

export default function Review({ review }) {
  const {
    author: name,
    created_at: createdAt,
    content,
    author_details,
  } = review;
  const { avatar_path: avatarPath, rating } = author_details;
  const [imgSrc, setImgSrc] = useState(`${TMDB_PROFILE_URL.w45}${avatarPath}`);
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
            <button
              className={styles.expandText}
              onClick={() => setIsTextExpanded(true)}
              type='button'
            >
              Read more
            </button>
          )}
        </>
      )}
      {isTextExpanded && (
        <>
          <p className={styles.p}>{content}</p>
          <button
            className={styles.expandText}
            onClick={() => setIsTextExpanded(false)}
            type='button'
          >
            Show less
          </button>
        </>
      )}
    </li>
  );
}

function getFirstWords(str, wordCount) {
  if (str.length <= wordCount) return str;
  return `${str.substring(0, wordCount)}...`;
}
