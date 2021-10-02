import { useSelector } from 'react-redux';

import classes from './EndGame.module.css';

const EndGame = () => {
  const minutes = useSelector(state => state.time.minutes);
  const seconds = useSelector(state => state.time.seconds);

  let message;

  switch (minutes) {
    case 0:
      message = `Gratulacje! Udało Ci się ukończyć grę w czasie ${seconds} sekund!`;
      break; 
    case 1:
      message = `Gratulacje! Udało Ci się ukończyć grę w czasie ${minutes} minuty i ${seconds} sekund!`;
      break; 
    default:
      message = `Gratulacje! Udało Ci się ukończyć grę w czasie ${minutes} minut i ${seconds} sekund!`;        
  }

  return (
    <div className={classes.message}>
      {message}
    </div>
  );
};

export default EndGame;
