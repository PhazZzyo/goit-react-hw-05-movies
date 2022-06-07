import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';
import defaultPoster from './default-poster.jpg';

const IMG_CONFIG = {
  base_url: 'https://image.tmdb.org/t/p/',
  size: 'w500',
};

export default function MovieCard({ movie, prevLocation }) {
  const {
    id,
    backdrop_path,
    title,
    release_date,
    popularity,
    overview,
    genres,
  } = movie;
  const { base_url, size } = IMG_CONFIG;
  const imgPath = `${base_url}${size}${backdrop_path}`;

  return (
    <>
      <div className={styles['card__info--general']}>
        <div className={styles['img__wrapper']}>
          {!backdrop_path ? (
            <img src={defaultPoster} alt={title} />
          ) : (
            <img src={`${imgPath}`} alt={title} />
          )}
        </div>
        <div className={styles['details__wrapper']}>
          <h2>
            <span>{title}</span>
            <span>({getRelizeYear(release_date)})</span>
          </h2>
          <p> User score: {getUserScore(popularity)} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{getGenresNames(genres)}</p>
        </div>
      </div>
      <div className={styles['card__info--additional']}>
        <h5>Additional information</h5>
        <ul>
          <li>
            <Link
              to={`/movies/${id}/cast`}
              state={{
                from: prevLocation,
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${id}/reviews`}
              state={{
                from: prevLocation,
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  prevLocation: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

function getRelizeYear(date) {
  const today = new Date(date);
  return today.getFullYear();
}

function getUserScore(data) {
  return Math.round(data);
}

function getGenresNames(data) {
  return data.map(({ name }) => name).join(', ');
}
