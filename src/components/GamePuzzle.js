import classes from './GamePuzzle.module.css';

const GamePuzzle = (props) => {
  return (
    <div className={classes.puzzle}>
      <div>{props.number}</div>
    </div>
  );
};

export default GamePuzzle;
