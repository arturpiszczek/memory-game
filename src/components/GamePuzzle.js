import { useState, useEffect } from 'react';

import classes from './GamePuzzle.module.css';

const GamePuzzle = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  }, [props.reverse]);  

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
