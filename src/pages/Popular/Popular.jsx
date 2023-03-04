import { getPopular } from '../../api/api';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Medias from '../../components/Medias/Medias';
import CategoryNavbar from '../../components/CategoryNavbar/CategoryNavbar';

export default function Popular({ mediaType }) {
  const { pageNumber } = useParams();
  const page = pageNumber || 1;
  const { data } = useQuery([`${mediaType}Popular`, `page ${page}`], () =>
    getPopular(mediaType, page)
  );
  const { total_pages: totalPages, results: medias } = data || {};

  return (
    <main>
      <CategoryNavbar />
      <Medias mediaType={mediaType} medias={medias} />;
    </main>
  );
}
