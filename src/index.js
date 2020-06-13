import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from './constants/routes';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/index.css';

render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <App>
          <Switch>
            {ROUTES.map(({ id, exact, path, component: Component }) => (
              <Route key={id} exact={exact} path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        </App>
      </Router>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
