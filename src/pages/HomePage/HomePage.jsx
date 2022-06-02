import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Container } from 'components/Container/Container';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import { fetchMovies } from '../../services/fetchMovies';
import Loader from 'components/Loader/Loader';
// import styles from './HomePage.module.css';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchMovies().then(data => {
        console.log(data.data.results);
        const mappedMovies = data.data.results.map(({ id, title }) => ({
          id,
          title,
        }));
        setMovies([mappedMovies]);
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  console.log(movies, 'movies state');
  return (
    <>
      {isLoading && <Loader />}
      <Outlet />
      <Container>
        {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
        <MovieGallery movies={movies} />
        <ToastContainer autoClose={3000} />
      </Container>
    </>
  );
};

export default HomePage;
