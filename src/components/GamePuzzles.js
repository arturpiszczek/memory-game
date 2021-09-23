import { useState } from 'react';

import GamePuzzle from './GamePuzzle';
import classes from './GamePuzzles.module.css';

const initialPuzzles = [];

const createPuzzles = (amountOfPuzzles) => {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < amountOfPuzzles / 2; j++) {
      initialPuzzles.push({ value: j, id: Math.random().toFixed(5), isVisible: true, reverse: false });
    }
  }
};

const GamePuzzles = (props) => {
  createPuzzles(props.elements); 
  const [puzzles, setPuzzles] = useState(initialPuzzles);  

  const clickedPuzzles = [];
  const clickedPuzzlesIndex = [];

  const comparePuzzlesHandler = (el, num) => {
    let index;

    if(clickedPuzzles.length > 1) {
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

    if(clickedPuzzles[0] === clickedPuzzles[1] && clickedPuzzlesIndex[0] !== clickedPuzzlesIndex[1]) {
      setPuzzles((prevPuzzles) => {
        prevPuzzles[clickedPuzzlesIndex[0]].isVisible = false;
        prevPuzzles[clickedPuzzlesIndex[1]].isVisible = false;
        return [...prevPuzzles];
      })
    }
    
    if(clickedPuzzles.length === 2){
      if(clickedPuzzles[0] !== clickedPuzzles[1]) {        
        setPuzzles((prevPuzzles) => {
          prevPuzzles[clickedPuzzlesIndex[0]].reverse = Math.random().toFixed(3);
          prevPuzzles[clickedPuzzlesIndex[1]].reverse = Math.random().toFixed(3);
          return [...prevPuzzles];
        })      
      }      
    }
  };  

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
