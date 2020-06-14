import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import TodoLink from '../TodoLink';
import useStyles from './styles';

const TodoButton = ({ href, color, children, className, ...attrs }) => {
  const classes = useStyles();
  const buttonClasses = classNames(className, classes.button);

  return (
    <TodoLink href={href}>
      <Button {...attrs} variant="contained" color={color} className={buttonClasses} fullWidth>
        {children}
      </Button>
    </TodoLink>
  );
};

TodoButton.propTypes = {
  href: propTypes.string.isRequired,
  color: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
};

TodoButton.defaultProps = {
  color: 'primary',
  children: null,
  className: '',
};

export default TodoButton;
