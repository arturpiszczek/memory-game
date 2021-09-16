import { useHistory } from 'react-router-dom';

import classes from './StartGameButton.module.css';

const StartGameButton = () => {
  const history = useHistory();

  const startGameHandler = () => {
    history.push('/play');
  };

  return <button className={classes.button} onClick={startGameHandler}>Rozpocznij grę</button>;
};

export default StartGameButton;
