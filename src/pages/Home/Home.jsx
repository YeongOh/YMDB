import React from 'react';
import { useQuery } from 'react-query';
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

  return (
    <>
      <h2 className={styles.h2}>In Theaters</h2>
      <Slider length={3}>
        <Medias mediaType={MEDIA_TYPE.movie} medias={movieNowPlaying} slider />
      </Slider>
      <h2 className={styles.h2}>Top Rated Movies</h2>
      <Slider length={3}>
        <Medias mediaType={MEDIA_TYPE.movie} medias={movieTopRated} slider />
      </Slider>
      <h2 className={styles.h2}>Popular Movies</h2>
      <Slider length={3}>
        <Medias mediaType={MEDIA_TYPE.movie} medias={moviePopular} slider />
      </Slider>
      <h2 className={styles.h2}>On Air</h2>
      <Slider length={3}>
        <Medias mediaType={MEDIA_TYPE.tv} medias={tvNowPlaying} slider />
      </Slider>
      <h2 className={styles.h2}>Top Rated Shows</h2>
      <Slider length={3}>
        <Medias mediaType={MEDIA_TYPE.tv} medias={tvTopRated} slider />
      </Slider>
      <h2 className={styles.h2}>Popular Shows</h2>
      <Slider length={3}>
        <Medias mediaType={MEDIA_TYPE.tv} medias={tvPopular} slider />
      </Slider>
    </>
  );
}
