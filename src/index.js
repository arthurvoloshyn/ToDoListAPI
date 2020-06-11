import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';

render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
