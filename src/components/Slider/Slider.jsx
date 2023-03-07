import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from './Slider.module.css';

export default function Slider({ children, length }) {
  const [sliderIndex, setSliderIndex] = useState(0);

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

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.slider} style={moveSlide}>
          {children}
        </div>
      </section>
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
    </div>
  );
}
