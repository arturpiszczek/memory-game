import GamePuzzle from './GamePuzzle';
import classes from './GamePuzzles.module.css';

const GamePuzzles = (props) => {
  const puzzles = [];

  const createPuzzles = (amountOfPuzzles) => {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < amountOfPuzzles / 2; j++) {
        puzzles.push({ value: j, id: Math.random().toFixed(5) });
      }
    }
  };

  createPuzzles(props.elements);

  return (
    <div className={classes.puzzles}>
      {puzzles.map((puzzle) => (
        <GamePuzzle 
          key={puzzle.id}
          number={puzzle.value} 
        />
      ))}
    </div>
  );
};

export default GamePuzzles;
