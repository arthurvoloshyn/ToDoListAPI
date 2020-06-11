import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTERS from './constants/router';

const App = () => (
  <Router>
    <Switch>
      {ROUTERS.map(({ id, path, exact, component: Component }) => (
        <Route key={id} path={path} exact={exact}>
          <Component />
        </Route>
      ))}
    </Switch>
  </Router>
);

export default App;
