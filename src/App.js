import React, { StrictMode } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from './constants/routes';
import TodoApp from './components/TodoApp';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <TodoApp>
          <Switch>
            {ROUTES.map(({ id, exact, path, component: Component }) => (
              <Route key={id} exact={exact} path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        </TodoApp>
      </Router>
    </ErrorBoundary>
  </StrictMode>
);

export default App;
