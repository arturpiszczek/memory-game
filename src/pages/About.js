import StartGameButton from '../components/Layout/StartGameButton';
import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes.info}>
      <article>
        <h2>O Grze:</h2>
        <p>
          Memory Game to darmowa gra logiczna online, polegająca na znalezieniu
          par spośród rozrzuconych kart. Gra dostępna jest na komputery
          stacjonarne, laptopy, tablety i telefony komórkowe. Aby zagrać
          wystarczy mieć dostęp do internetu i zainstalowaną dowolną
          przeglądarkę internetową.
        </p>
        <h2>Jak grać:</h2>
        <p>
          Aby rozpocząć naciśnij przycisk: Rozpocznij grę. Następnie wybierz liczbę par kart do dopasowania.
          Rozmieszczenie kart na planszy generowane jest losowo. Odkrywaj
          poszczególne karty aby dopasować pary. Aby ukończyć rozgrywkę dopasuj
          wszystkie pary. Najlepsze wyniki trafiają na listę rankingową!
        </p>
      </article>
      <StartGameButton />
    </section>
  );
};

export default About;
