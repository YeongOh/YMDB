import { useMediaQuery } from '@react-hook/media-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  MEDIA_TYPE,
} from '../../api/api';
import Medias from '../../components/Medias/Medias';
import Slider from '../../components/Slider/Slider';
import styles from './Home.module.css';

export default function Home() {
  const { data: movieNowPlaying } = useQuery({
    queryKey: [`${MEDIA_TYPE.movie}NowPlaying`, 1],
    queryFn: () => getNowPlaying(MEDIA_TYPE.movie),
  });
  const { data: moviePopular } = useQuery({
    queryKey: [`${MEDIA_TYPE.movie}Popular`, 1],
    queryFn: () => getPopular(MEDIA_TYPE.movie),
  });
  const { data: movieTopRated } = useQuery({
    queryKey: [`${MEDIA_TYPE.movie}TopRated`, 1],
    queryFn: () => getTopRated(MEDIA_TYPE.movie),
  });
  const { data: tvNowPlaying } = useQuery({
    queryKey: [`${MEDIA_TYPE.tv}NowPlaying`, 1],
    queryFn: () => getNowPlaying(MEDIA_TYPE.tv),
  });
  const { data: tvPopular } = useQuery({
    queryKey: [`${MEDIA_TYPE.tv}Popular`, 1],
    queryFn: () => getNowPlaying(MEDIA_TYPE.tv),
  });
  const { data: tvTopRated } = useQuery({
    queryKey: [`${MEDIA_TYPE.tv}NowPlaying`, 1],
    queryFn: () => getNowPlaying(MEDIA_TYPE.tv),
  });

  const isTabletScreen = useMediaQuery('only screen and (max-width: 1024px)');
  const isMobileScreen = useMediaQuery('only screen and (max-width: 500px)');

  let sliderLength = isTabletScreen ? 5 : isMobileScreen ? 8 : 3;

  return (
    <>
      <Helmet>
        <title>YMDB - Movies and TV shows</title>
      </Helmet>
      <Link to='/movie/nowPlaying' className={styles.link}>
        In Theaters
      </Link>
      <Slider length={sliderLength}>
        <Medias mediaType={MEDIA_TYPE.movie} medias={movieNowPlaying} slider />
      </Slider>
      <Link to='/movie/topRated' className={styles.link}>
        Top Rated Movies
      </Link>
      <Slider length={sliderLength}>
        <Medias mediaType={MEDIA_TYPE.movie} medias={movieTopRated} slider />
      </Slider>
      <Link to='/movie/popular' className={styles.link}>
        Popular Movies
      </Link>
      <Slider length={sliderLength}>
        <Medias mediaType={MEDIA_TYPE.movie} medias={moviePopular} slider />
      </Slider>
      <Link to='/tv/nowPlaying' className={styles.link}>
        On Air
      </Link>
      <Slider length={sliderLength}>
        <Medias mediaType={MEDIA_TYPE.tv} medias={tvNowPlaying} slider />
      </Slider>
      <Link to='/tv/topRated' className={styles.link}>
        Top Rated TV Shows
      </Link>
      <Slider length={sliderLength}>
        <Medias mediaType={MEDIA_TYPE.tv} medias={tvTopRated} slider />
      </Slider>
      <Link to='/tv/popular' className={styles.link}>
        Popular TV Shows
      </Link>
      <Slider length={sliderLength}>
        <Medias mediaType={MEDIA_TYPE.tv} medias={tvPopular} slider />
      </Slider>
    </>
  );
}
