import React from 'react';
import { MEDIA_TYPE } from '../../api/api';

export default function Home() {
  const { data: moviesNowPlaying } = useQuery({
    queryKey: [`${MEDIA_TYPE.movie}NowPlaying`, 1],
    queryFn: () => getNowPlaying(MEDIA_TYPE.movie),
  });

  return <div></div>;
}
