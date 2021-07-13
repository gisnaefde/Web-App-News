import './assets/scss/style.scss';
import Home from './pages/Home';
import { Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';

function App() {

  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  })

  return (
    <Router history={history}>
      <Switch>
        <Route exact path ="/" component={Home}></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
