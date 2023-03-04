import { NavLink } from 'react-router-dom';
import styles from './CategoryNavbar.module.css';

export default function CategoryNavbar() {
  return (
    <nav aria-label='Category'>
      <ul className={styles.ul}>
        <li>
          <NavLink
            to='/movie/nowplaying'
            className={({ isActive }) =>
              isActive ? styles.navActive : styles.nav
            }
          >
            On Air
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/movie/popular'
            className={({ isActive }) =>
              isActive ? styles.navActive : styles.nav
            }
          >
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/movie/toprated'
            className={({ isActive }) =>
              isActive ? styles.navActive : styles.nav
            }
          >
            Top Rated
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
