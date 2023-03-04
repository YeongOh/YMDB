import { getPopular } from '../../api/api';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Medias from '../../components/Medias/Medias';
import CategoryNavbar from '../../components/CategoryNavbar/CategoryNavbar';
import Pagination from '../../components/Pagination/Pagination';

export default function Popular({ mediaType }) {
  const { pageNumber } = useParams();
  const page = Number(pageNumber) || 1;
  const { data: medias } = useQuery({
    queryKey: [`${mediaType}Popular`, page],
    queryFn: () => getPopular(mediaType, page),
    keepPreviousData: true,
  });

  return (
    <>
      <CategoryNavbar mediaType={mediaType} />
      <Medias mediaType={mediaType} medias={medias} />
      <Pagination currentPage={page} />
    </>
  );
}
