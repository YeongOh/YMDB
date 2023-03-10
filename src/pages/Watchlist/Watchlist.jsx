import { Helmet } from 'react-helmet-async';
import Medias from '../../components/Medias/Medias';
import { useWatchlistContext } from '../../context/WatchlistContext';
import styles from './Watchlist.module.css';

export default function Watchlist() {
  const { watchlist } = useWatchlistContext();

  return (
    <>
      <Helmet>
        <title>My Watchlist - YMDB</title>
      </Helmet>
      <section className={styles.section}>
        <h1 className={styles.h1}>{watchlist?.length} Watchlist</h1>
        <Medias medias={watchlist} />
      </section>
    </>
  );
}
