import PropTypes from 'prop-types';
import style from './Button.module.css';

export default function Button({ GoBack }) {
  return (
    <button type="button" onClick={GoBack} className={style.Button}>
      Back
    </button>
  );
}

Button.propTypes = {
  GoBack: PropTypes.func.isRequired,
};
