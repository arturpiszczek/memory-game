import RankingItem from '../components/RankingItem';
import classes from './Ranking.module.css';

const Ranking = () => {
  const players = [
    { id: 1, name: 'McGregor', time: { min: 0, sec: 36 } },
    { id: 2, name: 'Attyla', time: { min: 0, sec: 39 } },
    { id: 3, name: 'rambo3000', time: { min: 0, sec: 44 } },
    { id: 4, name: 'maxi', time: { min: 0, sec: 46 } },
    { id: 5, name: 'Pedro16', time: { min: 0, sec: 50 } },
    { id: 6, name: 'Betis', time: { min: 1, sec: 0 } },
    { id: 7, name: 'marco', time: { min: 1, sec: 6 } },
    { id: 8, name: 'Luis', time: { min: 1, sec: 15 } },
    { id: 9, name: 'Enrique', time: { min: 1, sec: 23 } },
    { id: 10, name: 'sancho', time: { min: 1, sec: 30 } },
  ];

  return (
    <section className={classes.ranking}>
      <h2>Ranking 10 najlepszych graczy:</h2>
      {players.map((player) => (
        <RankingItem 
          key={+Math.random().toFixed(3)}
          id={player.id}
          player={player.name} 
          time={player.time}
        />
      ))}
    </section>
  );
};

export default Ranking;
