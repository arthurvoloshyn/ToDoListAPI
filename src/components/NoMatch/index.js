import React from 'react';
import { Link } from 'react-router-dom';
import ErrorIndicator from '../ErrorIndicator';
import TodoButton from '../TodoButton';

const NoMatch = () => (
  <ErrorIndicator>
    <TodoButton component={Link} to="/tasks">
      Go to the home page
    </TodoButton>
  </ErrorIndicator>
);

export default NoMatch;
