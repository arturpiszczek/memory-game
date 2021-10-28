import { useDispatch } from 'react-redux';

import { mobileNavActions } from '../../store/index';
import classes from './HamburgerButton.module.css';

const HamburgerButton = () => {
  const dispatch = useDispatch();

  const toggleMobileNav = () => {
    dispatch(mobileNavActions.toggleVisibility());
  };

  return (
    <button className={classes.hamburgerBtn} type="button" onClick={toggleMobileNav}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default HamburgerButton;
