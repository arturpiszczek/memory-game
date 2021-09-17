import classes from './ChooseGame.module.css';

const ChooseGame = (props) => {
  const chooseAmountHandler = event => {
    props.onChoose(event.target.name);
  };

  return (
    <section className={classes.choose}>
      <h2>Wybierz liczbę kart:</h2>
      <button onClick={chooseAmountHandler} name='24'>12 par</button>
      <button onClick={chooseAmountHandler} name='36'>18 par</button>
      <button onClick={chooseAmountHandler} name='48'>24 pary</button>
    </section>
  );
};

export default ChooseGame;
