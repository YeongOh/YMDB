import { getNowPlaying } from '../../api/api';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Medias from '../../components/Medias/Medias';
import CategoryNavbar from '../../components/CategoryNavbar/CategoryNavbar';

export default function NowPlaying({ mediaType }) {
  const { pageNumber } = useParams();
  const page = pageNumber || 1;
  const { data: medias } = useQuery(
    [`${mediaType}NowPlaying`, `page ${page}`],
    () => getNowPlaying(mediaType, page)
  );

  return (
    <main>
      <CategoryNavbar />
      <Medias mediaType={mediaType} medias={medias} />;
    </main>
  );
}
