import { lazy, Suspense } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
      <Suspense fallback={<Loader color={'#3f51b5'} size={32} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
