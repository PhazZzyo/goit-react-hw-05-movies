import { Link, useLocation } from 'react-router-dom';

// import style from './Button.module.css';

export default function BackButton() {
  const { state } = useLocation();
  console.log(state);
  return state?.from && <Link to={state.from}>Back</Link>;
}
