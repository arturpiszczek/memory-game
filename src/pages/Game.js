import { useState } from 'react';
import { useSelector } from 'react-redux';

import UserForm from '../components/UserForm';
import ChooseGame from '../components/ChooseGame';
import GameTimer from '../components/GameTimer';
import GamePuzzles from '../components/GamePuzzles';
import EndGame from '../components/EndGame';
import classes from './Game.module.css';

const Game = () => {
  const [isChosen, setIsChosen] = useState(false);
  const [chosenAmount, setChosenAmount] = useState(0);
  const [isFinished, setIsFinished] = useState(false); 
  
  const enteredUsername = useSelector(state => state.username.username);
  const isNameEntered = enteredUsername !== '';

  const setAmountHandler = amount => {
    setIsChosen(true);
    setChosenAmount(amount);
  };

  const setGameOverHandler = () => {
    setIsFinished(true);
  };
  
  return (
    <section className={classes.game}>
      {!isNameEntered && <UserForm />}
      {(isNameEntered && !isChosen) && <ChooseGame onChoose={setAmountHandler} />} 
      {(isChosen && !isFinished) && <GameTimer />}
      {(isChosen && !isFinished) && <GamePuzzles elements={chosenAmount} onGameOver={setGameOverHandler} />}
      {isFinished && <EndGame />}
    </section>
  );
};

export default Game;
