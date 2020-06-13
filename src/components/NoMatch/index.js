import React from 'react';
import ErrorIndicator from '../ErrorIndicator';
import TodoButton from '../TodoButton';

const NoMatch = () => (
  <ErrorIndicator>
    <TodoButton href="/">Go to the home page</TodoButton>
  </ErrorIndicator>
);

export default NoMatch;
