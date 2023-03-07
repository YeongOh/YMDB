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
                TV
              </NavLink>
            </li>
            <li>
              <SearchBar />
            </li>
            <li>
              <NavLink
                to='/watchlist'
                className={({ isActive }) =>
                  isActive ? styles.navActive : styles.nav
                }
              >
                Watchlist
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
