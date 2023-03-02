import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function MovieSearchResult() {
  const { searchQuery } = useParams;

  useEffect(() => {
    const getSearchResult = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1`
      );
      const data = await response.json();
      console.log(data);
    };

    getSearchResult();
  }, []);

  return <div></div>;
}
