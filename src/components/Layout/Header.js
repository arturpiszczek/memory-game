import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Memory Game</h1>
      <nav>
        <ul className={classes.list}>
          <li>O Grze</li>
          <li>Statystyki</li>
          <li>Kontakt</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;