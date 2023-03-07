import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getSearchResult, MEDIA_TYPE } from '../../api/api';
import Medias from '../../components/Medias/Medias';

export default function MediaSearchResult() {
  const { searchQuery } = useParams();
  const { data: results } = useQuery({
    queryKey: [`searchResult`, searchQuery],
    queryFn: () => getSearchResult(searchQuery, 1),
  });

  return (
    <>
      <Medias mediaType={MEDIA_TYPE.movie} medias={results} />
    </>
  );
}
