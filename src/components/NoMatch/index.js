import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ErrorIndicator from '../ErrorIndicator';

const NoMatch = () => (
  <ErrorIndicator>
    <Button variant="contained">
      <Link to="/">Go to the home page</Link>
    </Button>
  </ErrorIndicator>
);

export default NoMatch;
