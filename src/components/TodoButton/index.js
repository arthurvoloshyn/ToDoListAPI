import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import TodoLink from '../TodoLink';
import useStyles from './styles';

const TodoButton = ({ children, href, color, className, ...attrs }) => {
  const classes = useStyles();
  const buttonClasses = classNames(classes.button, className);

  return (
    <TodoLink href={href}>
      <Button {...attrs} color={color} className={buttonClasses} variant="contained" fullWidth>
        {children}
      </Button>
    </TodoLink>
  );
};

TodoButton.propTypes = {
  children: propTypes.node.isRequired,
  href: propTypes.string.isRequired,
  color: propTypes.string,
  className: propTypes.string,
};

TodoButton.defaultProps = {
  color: 'primary',
  className: '',
};

export default TodoButton;
