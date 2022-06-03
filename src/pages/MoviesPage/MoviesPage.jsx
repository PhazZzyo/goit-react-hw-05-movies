import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import { fetchMovies } from 'services/fetchMovies';

export const MoviesPage = () => {
  const [searchRequest, setSearchRequest] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const updateMovies = searchRequest => {
      setIsLoading(true);

      setTimeout(() => {
        try {
          fetchMovies(searchRequest).then(data => {
            if (!data.data.hits.length) {
              return toast.error(
                'There is no movies found with that search request'
              );
            }
            const mappedMovies = data.data.hits.map(
              ({ id, webformatURL, tags, largeImageURL }) => ({
                id,
                webformatURL,
                tags,
                largeImageURL,
              })
            );
            setMovies(i => [...i, ...mappedMovies]);
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
      setMovies([]);
      return;
    }
  };

  return (
    <>
      <Searchbar onSearch={handleSearchSubmit} />
      {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
      {isLoading && <Loader color={'#3f51b5'} size={32} />}
      {movies.length > 0 && <MovieGallery movies={movies} />}
    </>
  );
};
