import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import MovieCard from 'components/MovieCard/MovieCard';

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
  const prevLocation = location?.state?.from ?? DEFAULT_LOCATION_STATE;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        fetchMoviesById(movieId)
          .then(fetchedMovie)
          .then(movie => {
            setMovie(movie);
          });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  }, [movieId]);

  const GoBack = () => {
    useNavigate(prevLocation.location);
  };

  return (
    <>
      {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
      <>
        {isLoading && <Loader color={'#3f51b5'} size={32} />}
        <Button GoBack={GoBack} />
        <MovieCard movie={movie} prevLocation={prevLocation} />
      </>
    </>
  );
}

const fetchedMovie = data => {
  console.log(data);
  const {
    id,
    backdrop_path,
    title,
    release_date,
    popularity,
    overview,
    genres,
  } = data.data;
  const movie = {
    id,
    backdrop_path,
    title,
    release_date,
    popularity,
    overview,
    genres,
  };
  console.log(movie);
  return movie;
};
