import styles from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const [openSearch, setOpenSearch] = useState(false);
  const isMobileScreen = useMediaQuery('only screen and (max-width: 480px)');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim() === '') return;
    const encodedSearchText = encodeURI(searchText.trim());
    setOpenSearch(false);
    return navigate(`/search/${encodedSearchText}`);
  };

  if (isMobileScreen)
    return (
      <div className={styles.div}>
        <button
          className={styles.iconButton}
          onClick={() => setOpenSearch((prev) => !prev)}
          tye='button'
          aria-label='open searchbar'
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        </button>
        {openSearch && (
          <form
            onSubmit={handleSubmit}
            className={`${styles.form} ${styles.mobileForm}`}
          >
            <input
              className={styles.input}
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              type='text'
              placeholder='Search'
            />
            <button className={styles.button} type='submit' aria-label='search'>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles.icon}
              />
            </button>
          </form>
        )}
      </div>
    );

  return (
    <div className={styles.div}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          type='text'
          placeholder='Search'
        />
        <button className={styles.button} type='submit' aria-label='search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        </button>
      </form>
    </div>
  );
}
