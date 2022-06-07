import { Link, useLocation } from 'react-router-dom';

// import style from './Button.module.css';

export default function BackButton() {
  const { state } = useLocation();
  console.log(state);
  return state?.prevPage && <Link to={state.prevPage}>Back</Link>;
}
