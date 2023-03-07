import styles from './Medias.module.css';
import Card from '../Card/Card';

export default function Medias({ medias, mediaType, slider }) {
  return (
    <>
      {medias?.length && (
        <ul className={`${slider ? styles.sliderUl : styles.ul}`}>
          {medias.map((media) => (
            <Card
              key={media.id}
              mediaType={mediaType}
              media={media}
              slider={slider}
            />
          ))}
        </ul>
      )}
    </>
  );
}
