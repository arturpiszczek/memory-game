import classes from './Contact.module.css';

const Contact = () => {
  return (
    <section className={classes.contact}>
      <h2>Skontaktuj się ze mną poprzez:</h2>
      <article>
        <i className="devicon-google-plain"></i>
        a.piszczek24@gmail.com
      </article>
      <article>
        <i className="devicon-linkedin-plain"></i>        
        <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/arturpiszczek">konto na LinkedIn</a>        
      </article>
      <article>
        <i className="devicon-github-original"></i>        
        <a target="_blank" rel="noreferrer" href="https://github.com/arturpiszczek">konto na GitHub</a>        
      </article>
    </section>
  );
};

export default Contact;
