import {
  faChevronLeft,
  faChevronRight,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import styles from './Pagination.module.css';

export default function Pagination({ currentPage }) {
  const location = useLocation();
  const delimeter = location.pathname.split('/');
  const lastDelimeter = Number(delimeter[delimeter.length - 1]);

  let currentURL;
  let startIndex;

  if (Number.isNaN(lastDelimeter)) {
    // /popular/ without page number
    currentURL = delimeter.join('/') + '/';
    startIndex = 1;
  } else {
    currentURL = delimeter.slice(0, -1).join('/') + '/';
    // This scary looking code is my despearte attempt to
    // 1,2,3,4,5 next 6,7,8,9,10 next 11,12,13,14,15
    if (currentPage % 5 === 0) {
      startIndex = currentPage - 4;
    } else {
      startIndex =
        currentPage / 5 < 1 ? 1 : Math.floor(currentPage / 5) * 5 + 1;
    }
  }

  return (
    <nav aria-label='Pagination'>
      <ul className={styles.ul}>
        {5 < currentPage && (
          <li className={styles.li}>
            <Link className={styles.link} to={`${currentURL}${1}`}>
              <span className={styles.span}>
                <FontAwesomeIcon className={styles.chevron} icon={faHouse} />
              </span>
            </Link>
          </li>
        )}
        {1 < currentPage && (
          <li>
            <Link
              className={styles.link}
              to={`${currentURL}${currentPage - 1}`}
            >
              <span className={styles.span}>
                <FontAwesomeIcon
                  className={styles.chevron}
                  icon={faChevronLeft}
                />
              </span>
            </Link>
          </li>
        )}
        <li className={styles.li}>
          <Link className={styles.link} to={`${currentURL}${startIndex}`}>
            <span
              className={`${styles.span} ${
                currentPage === startIndex && styles.active
              }`}
            >
              {startIndex}
            </span>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`${currentURL}${startIndex + 1}`}>
            <span
              className={`${styles.span} ${
                currentPage === startIndex + 1 && styles.active
              }`}
            >
              {startIndex + 1}
            </span>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`${currentURL}${startIndex + 2}`}>
            <span
              className={`${styles.span} ${
                currentPage === startIndex + 2 && styles.active
              }`}
            >
              {startIndex + 2}
            </span>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`${currentURL}${startIndex + 3}`}>
            <span
              className={`${styles.span} ${
                currentPage === startIndex + 3 && styles.active
              }`}
            >
              {startIndex + 3}
            </span>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`${currentURL}${startIndex + 4}`}>
            <span
              className={`${styles.span} ${
                currentPage === startIndex + 4 && styles.active
              }`}
            >
              {startIndex + 4}
            </span>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`${currentURL}${currentPage + 1}`}>
            <span className={styles.span}>
              <FontAwesomeIcon
                className={styles.chevron}
                icon={faChevronRight}
              />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
