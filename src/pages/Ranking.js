import { useDispatch, useSelector } from 'react-redux';

import { timeActions } from '../store/index';
import RankingItem from '../components/RankingItem';
import classes from './Ranking.module.css';

const dummyPlayers = [
  { name: 'McGregor', time: { min: 0, sec: 36 } },
  { name: 'Attyla', time: { min: 0, sec: 39 } },
  { name: 'rambo3000', time: { min: 0, sec: 44 } },
  { name: 'maxi', time: { min: 0, sec: 46 } },
  { name: 'Pedro16', time: { min: 0, sec: 50 } },
  { name: 'Betis', time: { min: 1, sec: 0 } },
  { name: 'marco', time: { min: 1, sec: 14 } },
  { name: 'Luis', time: { min: 1, sec: 43 } },
  { name: 'Enrique', time: { min: 2, sec: 16 } },
  { name: 'sancho', time: { min: 2, sec: 33 } },
];

const Ranking = () => {
  const dispatch = useDispatch();
  const newName = useSelector(state => state.username.username);
  const newTimeMin = useSelector(state => state.time.minutes);
  const newTimeSec = useSelector(state => state.time.seconds);
  const newPlayer = { name: newName, time: { min: newTimeMin, sec: newTimeSec } };

  if (newTimeMin !== 0 || newTimeSec !== 0) {
    dummyPlayers.push(newPlayer);  
    dummyPlayers.sort((a,b) => (a.time.sec > b.time.sec) ? -1 : 1);
    dummyPlayers.sort((a,b) => (a.time.min > b.time.min) ? 1 : -1);

    dispatch(timeActions.addTime({ minutes: 0, seconds: 0 }));
  }

  const players = dummyPlayers.slice(0, 10);

  return (
    <section className={classes.ranking}>
      <h2>Ranking 10 najlepszych graczy:</h2>
      {players.map((player) => (
        <RankingItem 
          key={+Math.random().toFixed(5)}
          id={players.indexOf(player) + 1}
          player={player.name} 
          time={player.time}
        />
      ))}
    </section>
  );
};

export default Ranking;
