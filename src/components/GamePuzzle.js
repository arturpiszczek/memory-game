import { useState } from 'react';

import classes from './GamePuzzle.module.css';

const GamePuzzle = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const rotatePuzzleHandler = () => {
    setIsClicked(true);
    props.onCompare(props.id, props.number);
  };

  return (
    <div className={`${classes.puzzle} ${isClicked ? classes.clicked : ''} ${!props.visibility ? classes.hide : ''}`} onClick={rotatePuzzleHandler}>
      {isClicked ? props.number : '?'}
    </div>
  );
};

export default GamePuzzle;
