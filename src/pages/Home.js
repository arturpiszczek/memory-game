import classes from './Home.module.css';

const Home = () => {
  return (
    <section className={classes.intro}>
      <article>
        <p>Zagraj w nową przeglądarkową grę online.</p>
        <p>Przekonaj się jak szybko uda Ci się rozwiązać zagadkę!</p>
      </article>
      <button>Rozpocznij grę</button>
    </section>
  );
};

export default Home;
