import { Route, Switch, Redirect } from 'react-router-dom';

import MainHeader from './components/Layout/MainHeader';
import Home from './pages/Home';
import About from './pages/About';
import Ranking from './pages/Ranking';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>          
          <Route path="/about">
            <About />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
