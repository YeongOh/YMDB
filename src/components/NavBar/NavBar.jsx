import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faFilm, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from '@react-hook/media-query';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

export default function NavBar() {
  const isTabletScreen = useMediaQuery('only screen and (max-width: 1024px)');
  const isMobileScreen = useMediaQuery('only screen and (max-width: 480px)');

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.div}>
          <NavLink className={styles.home} to='/'>
            <img className={styles.logo} src='/logo.png' alt='' />
            {!isTabletScreen && !isMobileScreen && `YMDB`}
          </NavLink>
          <nav>
            <ul className={styles.ul}>
              <li>
                <NavLink
                  to='/movie'
                  className={({ isActive }) =>
                    isActive ? styles.navActive : styles.nav
                  }
                >
                  <FontAwesomeIcon icon={faFilm} />
                  {!isTabletScreen && !isMobileScreen && `Movies`}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/tv'
                  className={({ isActive }) =>
                    isActive ? styles.navActive : styles.nav
                  }
                >
                  <FontAwesomeIcon icon={faTv} />
                  {!isTabletScreen && !isMobileScreen && `TV`}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/watchlist'
                  className={({ isActive }) =>
                    isActive ? styles.navActive : styles.nav
                  }
                >
                  <FontAwesomeIcon icon={faBookmark} />
                  {!isTabletScreen && !isMobileScreen && `Watchlist`}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <SearchBar />
      </div>
    </header>
  );
}
