import classes from './RankingItem.module.css';

const RankingItem = (props) => {
  let sec = props.time.sec;

  if (sec < 10) {
    sec = `0${props.time.sec}`;
  }

  return (
    <div className={classes.rankingItem}>
      <div className={classes.rankNum}>{props.id}.</div>
      <div className={classes.player}>{props.player}</div>
      <div className={classes.time}>{`${props.time.min} : ${sec}`}</div>
    </div>
  );
};

export default RankingItem;
