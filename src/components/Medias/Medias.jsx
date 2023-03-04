import styles from './Medias.module.css';
import Card from '../Card/Card';

export default function Medias({ medias, mediaType }) {
  return (
    <>
      {medias?.length && (
        <ul className={styles.ul}>
          {medias.map((media) => (
            <Card key={media.id} mediaType={mediaType} media={media} />
          ))}
        </ul>
      )}
    </>
  );
}
