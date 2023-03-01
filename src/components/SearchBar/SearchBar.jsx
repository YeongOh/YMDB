import styles from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  const onSubmit = (event) => {
    event.preventDefault();
    // link
  };

  return (
    <div className={styles.div}>
      <form onClick={onSubmit} className={styles.form}>
        <input className={styles.input} type='text' placeholder='Search' />
        <button className={styles.button} type='submit' aria-label='search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        </button>
      </form>
    </div>
  );
}
