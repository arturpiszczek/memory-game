import classes from './ChooseGame.module.css';

const ChooseGame = () => {
  return (
    <section className={classes.choose}>
      <h2>Wybierz liczbę kart:</h2>
      <button>12 par</button>
      <button>18 par</button>
      <button>24 pary</button>
    </section>
  );
};

export default ChooseGame;
