import { NavLink } from 'react-router-dom';
import styles from './CategoryNavbar.module.css';

export default function CategoryNavbar() {
  return (
    <ul className={styles.ul}>
      <NavLink
        to='/movie/nowplaying'
        className={({ isActive }) => (isActive ? styles.navActive : styles.nav)}
      >
        On Air
      </NavLink>
      <NavLink
        to='/movie/popular'
        className={({ isActive }) => (isActive ? styles.navActive : styles.nav)}
      >
        Popular
      </NavLink>
      <NavLink
        to='/movie/toprated'
        className={({ isActive }) => (isActive ? styles.navActive : styles.nav)}
      >
        Top Rated
      </NavLink>
    </ul>
  );
}
