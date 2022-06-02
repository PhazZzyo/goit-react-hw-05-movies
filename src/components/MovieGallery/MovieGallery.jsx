import { Link, useLocation } from 'react-router-dom';
// import style from './MovieGallery.module.css';
import PropTypes from 'prop-types';

const MovieGallery = ({ movies }) => {
  console.log(movies, 'gallery');
  const location = useLocation();
  const renderGallery = () =>
    movies.map(({ id, title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: { location } }}>
          {title}
        </Link>
      </li>
    ));

  return (
    <div>
      <ul>{movies ? renderGallery() : null}</ul>
    </div>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default MovieGallery;
