import styles from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim() === '') return;
    // const encodedSearchText = encodeURI(searchText);
    return navigate(`/search/${searchText}`);
  };

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
