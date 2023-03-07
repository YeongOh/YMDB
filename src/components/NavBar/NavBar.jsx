import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faFilm, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <NavLink className={styles.home} to='/'>
          YMDB
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
                Movies
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
                TV
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
                Watchlist
              </NavLink>
            </li>
            <li className={styles.searchBarLi}>
              <SearchBar />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
