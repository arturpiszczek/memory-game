import { useState } from 'react';

import ChooseGame from '../components/ChooseGame';
import GamePuzzles from '../components/GamePuzzles';
import EndGame from '../components/EndGame';
import classes from './Game.module.css';

const Game = () => {
  const [isChosen, setIsChosen] = useState(false);
  const [chosenAmount, setChosenAmount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);  

  const setAmountHandler = amount => {
    setIsChosen(true);
    setChosenAmount(amount);
  };

  const setGameOverHandler = () => {
    setIsFinished(true);
  };

  return (
    <section className={classes.game}>
      {!isChosen && <ChooseGame onChoose={setAmountHandler} />}
      {(isChosen && !isFinished) && <GamePuzzles elements={chosenAmount} onGameOver={setGameOverHandler} />}
      {isFinished && <EndGame />}
    </section>
  );
};

export default Game;
