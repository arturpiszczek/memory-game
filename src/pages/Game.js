import ChooseGame from '../components/ChooseGame';
import classes from './Game.module.css';

const Game = () => {
  return (
    <section className={classes.game}>
      <ChooseGame />
    </section>
  );
};

export default Game;
