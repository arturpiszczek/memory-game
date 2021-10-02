import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { timeActions } from '../store/index';
import classes from './GameTimer.module.css';

const GameTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const status = useSelector(state => state.status.isFinished);
  const dispatch = useDispatch();

  if (status) {            
    dispatch(timeActions.addTime({ minutes: minutes, seconds: seconds }));      
  }  

  useEffect(() => {
    const timer = setTimeout(() => {  
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);     
    
    return () => {
      clearTimeout(timer);                 
    };    
  }, [seconds]);

  if (seconds === 60) {    
    setSeconds(prevSeconds => prevSeconds - 60);  
    setMinutes(prevMinutes => prevMinutes + 1);  
  }   

  return (
    <div className={classes.timer}>
      {seconds < 10 ? `Czas gry ${minutes} : 0${seconds}` : `Czas gry ${minutes} : ${seconds}`}
    </div>
  );
};

export default GameTimer;
