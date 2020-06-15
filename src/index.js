import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './styles/index.css';

render(<App />, document.getElementById('root'));

serviceWorker.register();
