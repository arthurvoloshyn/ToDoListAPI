import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/index.css';

render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
