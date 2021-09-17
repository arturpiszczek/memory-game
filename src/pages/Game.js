import { useState } from 'react';

import ChooseGame from '../components/ChooseGame';
import GamePuzzles from '../components/GamePuzzles';
import classes from './Game.module.css';

const Game = () => {
  const [isChosen, setIsChosen] = useState(false);
  const [chosenAmount, setChosenAmount] = useState();

  const setAmountHandler = amount => {
    setIsChosen(true);
    setChosenAmount(amount);
  };

  return (
    <section className={classes.game}>
      {!isChosen && <ChooseGame onChoose={setAmountHandler} />}
      {isChosen && <GamePuzzles elements={chosenAmount} />}
    </section>
  );
};

export default Game;
