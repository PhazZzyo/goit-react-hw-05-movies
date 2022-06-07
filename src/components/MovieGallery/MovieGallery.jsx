import { Link } from 'react-router-dom';
// import style from './MovieGallery.module.css';
import PropTypes from 'prop-types';

export const MovieGallery = ({ movies, currentUrl }) => {
  const renderGallery = () =>
    movies.map(({ id, title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`} state={currentUrl}>
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
