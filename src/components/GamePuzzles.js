import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { statusActions } from '../store/index';
import GamePuzzle from './GamePuzzle';
import classes from './GamePuzzles.module.css';

const GamePuzzles = (props) => {
  const initialPuzzles = [];
  const clickedPuzzles = [];
  const clickedPuzzlesIndex = [];  

  const dispatch = useDispatch();

  const createPuzzles = (amountOfPuzzles) => {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < amountOfPuzzles / 2; j++) {
        initialPuzzles.push({ value: j, id: +Math.random().toFixed(6), isVisible: true, reverse: 0 });
      }
    }
    initialPuzzles.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
  };

  createPuzzles(props.elements); 
  const [puzzles, setPuzzles] = useState(initialPuzzles);  

  const comparePuzzlesHandler = (el, num) => {
    let index;

    if (clickedPuzzles.length > 1) {
      clickedPuzzles.splice(0, 2);
      clickedPuzzlesIndex.splice(0, 2);
    }
    
    puzzles.some((puzzle, idx) => {
      if (puzzle.id === el) {
        index = idx;
      }
      return index;
    });

    clickedPuzzlesIndex.push(index);
    clickedPuzzles.push(num);    

    if (clickedPuzzles[0] === clickedPuzzles[1] && clickedPuzzlesIndex[0] !== clickedPuzzlesIndex[1]) {
      setPuzzles((prevPuzzles) => {
        prevPuzzles[clickedPuzzlesIndex[0]].isVisible = false;
        prevPuzzles[clickedPuzzlesIndex[1]].isVisible = false;
        return [...prevPuzzles];
      })
    }
    
    if (clickedPuzzles.length === 2) {
      if (clickedPuzzles[0] !== clickedPuzzles[1]) {        
        setPuzzles((prevPuzzles) => {
          prevPuzzles[clickedPuzzlesIndex[0]].reverse = +Math.random().toFixed(3);
          prevPuzzles[clickedPuzzlesIndex[1]].reverse = +Math.random().toFixed(3);
          return [...prevPuzzles];
        })      
      }      
    }
  };  

  if (!puzzles.some(puzzle => puzzle.isVisible === true)) {
    setTimeout(() => {
      dispatch(statusActions.setAsFinished());      
    }, 1000);    
    setTimeout(() => {
      props.onGameOver();
    }, 1000);
  }

  return (
    <div className={classes.board}>
      {puzzles.map((puzzle) => (
        <GamePuzzle 
          key={puzzle.id}
          id={puzzle.id}
          number={puzzle.value} 
          visibility={puzzle.isVisible}
          reverse={puzzle.reverse}
          onCompare={comparePuzzlesHandler}
        />
      ))}
    </div>
  );
};

export default GamePuzzles;
