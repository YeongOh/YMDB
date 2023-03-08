import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <div>
          &copy; 2023, made by{' '}
          <a
            className={styles.a}
            href='https://github.com/YeongOh'
            rel='author'
            target='_blank'
          >
            YeongOh
          </a>
        </div>
        <div>
          View{' '}
          <a
            className={styles.a}
            href='https://github.com/YeongOh/YMDB'
            target='_blank'
          >
            {' '}
            Source Code
          </a>
        </div>
      </div>
    </footer>
  );
}
