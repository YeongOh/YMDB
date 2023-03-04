import { NavLink, useLocation } from 'react-router-dom';
import styles from './CategoryNavbar.module.css';

export default function CategoryNavbar({ mediaType }) {
  const location = useLocation();
  const delimeter = location.pathname.split('/');
  let lastURL = delimeter.at(-1) === '' ? delimeter.at(-2) : delimeter.at(-1);

  return (
    <nav aria-label='Category' className={styles.wrapper}>
      <ul className={styles.ul}>
        <li>
          <NavLink
            to={`/${mediaType}/nowplaying`}
            className={({ isActive }) =>
              isActive
                ? styles.navActive
                : lastURL === 'movie' || lastURL === 'tv'
                ? styles.navActive
                : styles.nav
            }
          >
            On Air
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/${mediaType}/popular`}
            className={({ isActive }) =>
              isActive ? styles.navActive : styles.nav
            }
          >
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/${mediaType}/toprated`}
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
