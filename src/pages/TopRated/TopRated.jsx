import { getTopRated } from '../../api/api';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Medias from '../../components/Medias/Medias';
import CategoryNavbar from '../../components/CategoryNavbar/CategoryNavbar';

export default function TopRated({ mediaType }) {
  const { pageNumber } = useParams();
  const page = pageNumber || 1;
  const { data: medias } = useQuery(
    [`${mediaType}TopRated`, `page ${page}`],
    () => getTopRated(mediaType, page)
  );

  return (
    <main>
      <CategoryNavbar />
      <Medias mediaType={mediaType} medias={medias} />;
    </main>
  );
}
