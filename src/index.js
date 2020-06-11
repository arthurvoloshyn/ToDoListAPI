import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
