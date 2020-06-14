import React from 'react';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';
import TodoLink from '../TodoLink';
import useStyles from './styles';

const TodoButton = ({ href, color, children, ...attrs }) => {
  const classes = useStyles();

  return (
    <TodoLink href={href}>
      <Button {...attrs} variant="contained" color={color} className={classes.button} fullWidth>
        {children}
      </Button>
    </TodoLink>
  );
};

TodoButton.propTypes = {
  href: propTypes.string.isRequired,
  color: propTypes.string,
  children: propTypes.node,
};

TodoButton.defaultProps = {
  color: 'primary',
  children: null,
};

export default TodoButton;
