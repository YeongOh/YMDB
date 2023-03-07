import { TMDB_BACKDROP_URL } from '../../api/api';
import styles from './Gallery.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function Gallery({ images, title }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const length = images.length;

  const handlePrevious = () => {
    if (sliderIndex === 0) return;
    setSliderIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (sliderIndex === length - 1) return;
    setSliderIndex((prev) => prev + 1);
  };

  const moveSlide = {
    transform: `translateX(${sliderIndex * -100}%)`,
  };

  const colorProgressCircle = {
    color: 'white',
  };

  return (
    <section className={styles.section}>
      <div className={styles.slider}>
        {images.map((image) => (
          <img
            key={image.file_path}
            style={moveSlide}
            className={styles.img}
            src={`${TMDB_BACKDROP_URL.w1280}${image.file_path}`}
            alt={title}
          />
        ))}
      </div>
      {sliderIndex !== 0 && (
        <button
          className={styles.previousButton}
          onClick={handlePrevious}
          aria-label='slide to the previous image'
          type='button'
        >
          <FontAwesomeIcon className={styles.chevron} icon={faChevronLeft} />
        </button>
      )}
      {sliderIndex !== length - 1 && (
        <button
          className={styles.nextButton}
          onClick={handleNext}
          aria-label='slide to the next image'
          type='button'
        >
          <FontAwesomeIcon className={styles.chevron} icon={faChevronRight} />
        </button>
      )}
      <div className={styles.progress}>
        {[...Array(length)].map((item, index) => (
          <FontAwesomeIcon
            key={index}
            style={sliderIndex === index && colorProgressCircle}
            onClick={() => setSliderIndex(index)}
            className={styles.circle}
            icon={faCircle}
          />
        ))}
      </div>
    </section>
  );
}
