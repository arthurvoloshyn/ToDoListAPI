import React from 'react';
import ErrorIndicator from '../ErrorIndicator';
import TodoLink from '../TodoLink';
import TodoButton from '../TodoButton';

const NoMatch = () => (
  <ErrorIndicator>
    <TodoLink href="/">
      <TodoButton>Go to the home page</TodoButton>
    </TodoLink>
  </ErrorIndicator>
);

export default NoMatch;
