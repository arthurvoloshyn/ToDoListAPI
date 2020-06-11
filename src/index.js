import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'antd/dist/antd.css';
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
