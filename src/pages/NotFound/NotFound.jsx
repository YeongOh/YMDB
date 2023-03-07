import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.h1}>
          <FontAwesomeIcon className={styles.icon} icon={faCircleExclamation} />
          The result was not found. Sorry for your inconvienience {':('}
        </h1>
      </main>
    </>
  );
}
