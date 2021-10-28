import { NavLink } from 'react-router-dom';

import HamburgerButton from './HamburgerButton';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Memory Game</h1>
      <HamburgerButton />
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              Start
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/about">
              O Grze
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/ranking">
              Ranking
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/contact">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
