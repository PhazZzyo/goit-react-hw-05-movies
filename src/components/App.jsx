import { lazy, Suspense } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);

export const App = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Suspense fallback={<Loader color={'#3f51b5'} size={32} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
