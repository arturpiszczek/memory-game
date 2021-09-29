import { useState, useEffect } from 'react';

import classes from './GameTimer.module.css';

let minutes = 0;

const GameTimer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {  
      setSeconds(prevSeconds => {
        return prevSeconds + 1;
      });
    }, 1000);     
    
    return () => clearTimeout(timer);
    
  }, [seconds]);

  if (seconds === 60) {    
    setSeconds(prevSeconds => {
      return prevSeconds - 60;
    });    
    minutes++;
  }   

  return (
    <div className={classes.timer}>
      {seconds < 10 ? `Czas gry ${minutes} : 0${seconds}` : `Czas gry ${minutes} : ${seconds}`}
    </div>
  );
};

export default GameTimer;
