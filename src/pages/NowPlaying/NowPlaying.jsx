import { getNowPlaying, MEDIA_TYPE } from '../../api/api';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Medias from '../../components/Medias/Medias';
import CategoryNavbar from '../../components/CategoryNavbar/CategoryNavbar';
import Pagination from '../../components/Pagination/Pagination';
import { Helmet } from 'react-helmet-async';

export default function NowPlaying({ mediaType }) {
  const { pageNumber } = useParams();
  const page = Number(pageNumber) || 1;
  const { data: medias } = useQuery({
    queryKey: [`${mediaType}NowPlaying`, page],
    queryFn: () => getNowPlaying(mediaType, page),
    keepPreviousData: true,
  });

  const mediaTypeTitle = mediaType === MEDIA_TYPE.movie ? 'Movies' : 'TV Shows';

  return (
    <>
      <Helmet>
        <title>On Air {`${mediaTypeTitle}`} - YMDB</title>
      </Helmet>
      <CategoryNavbar mediaType={mediaType} />
      <Medias mediaType={mediaType} medias={medias} />
      <Pagination currentPage={page} />
    </>
  );
}
