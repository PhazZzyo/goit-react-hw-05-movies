import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import { fetchMoviesByRequest } from 'services/fetchMovies';

export default function MoviesPage() {
  const [searchRequest, setSearchRequest] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { pathname, search } = useLocation;
  const currentUrl = {
    prevPage: `${pathname}${search}`,
  };
  console.log(pathname, search);

  useEffect(() => {
    const updateMovies = searchRequest => {
      setIsLoading(true);

      setTimeout(() => {
        try {
          fetchMoviesByRequest(searchRequest).then(data => {
            if (!data.data.results.length) {
              return toast.error(
                'There is no movies found with that search request'
              );
            }
            const mappedMovies = data.data.results.map(({ id, title }) => ({
              id,
              title,
            }));
            setMovies([...mappedMovies]);
          });
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }, 1000);
    };
    if (searchRequest !== '') {
      updateMovies(searchRequest);
    }
  }, [searchRequest]);

  const handleSearchSubmit = value => {
    if (value !== searchRequest) {
      setSearchRequest(value);
      setSearchParams({ query: value });
      setMovies([]);
      return;
    }
  };

  return (
    <>
      <Searchbar onSearch={handleSearchSubmit} />
      {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
      {isLoading && <Loader color={'#3f51b5'} size={32} />}
      {movies.length > 0 && (
        <MovieGallery movies={movies} currentUrl={currentUrl} />
      )}
    </>
  );
}
