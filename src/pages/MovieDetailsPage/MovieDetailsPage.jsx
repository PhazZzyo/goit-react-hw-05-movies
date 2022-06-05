import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loader from 'components/Loader/Loader';

import { fetchMoviesById } from '../../services/fetchMovies';

const DEFAULT_LOCATION_STATE = {
  location: {
    pathname: '/',
    search: '',
  },
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const fromLocation = location?.state?.from ?? DEFAULT_LOCATION_STATE;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        fetchMoviesById(movieId).then(data => {
          const mappedMovie = data.data.results.map(
            ({
              id,
              backdrop_path,
              title,
              release_date,
              popularity,
              overview,
              genres,
            }) => ({
              id,
              backdrop_path,
              title,
              release_date,
              popularity,
              overview,
              genres,
            })
          );
          setMovie(mappedMovie);
        });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  }, [movieId]);

  const GoBackHandler = () => {
    useNavigate(fromLocation.location);
  };

  return (
    <>
      {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
      <>
        {isLoading && <Loader color={'#3f51b5'} size={32} />}
        {console.log(movie)}
        {/* <GoBackButton onClickHandler={GoBackHandler} /> */}
        {/* <MovieCardRender movie={movie} fromLocation={fromLocation} /> */}
      </>
    </>
  );
}
