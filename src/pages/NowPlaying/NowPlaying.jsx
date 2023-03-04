import { getNowPlaying } from '../../api/api';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Medias from '../../components/Medias/Medias';
import CategoryNavbar from '../../components/CategoryNavbar/CategoryNavbar';
import Pagination from '../../components/Pagination/Pagination';

export default function NowPlaying({ mediaType }) {
  const { pageNumber } = useParams();
  const page = Number(pageNumber) || 1;
  const { data: medias } = useQuery({
    queryKey: [`${mediaType}NowPlaying`, `page ${page}`],
    queryFn: () => getNowPlaying(mediaType, page),
    keepPreviousData: true,
  });

  return (
    <main>
      <CategoryNavbar />
      <Medias mediaType={mediaType} medias={medias} />;
      <Pagination currentPage={page} />
    </main>
  );
}
