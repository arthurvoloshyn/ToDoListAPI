import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import useStyles from './styles';

const TodoButton = ({ children, color, className, onClick, ...attrs }) => {
  const classes = useStyles();
  const buttonClasses = classNames(classes.button, className);

  return (
    <Button
      {...attrs}
      color={color}
      className={buttonClasses}
      onClick={onClick}
      variant="contained"
      fullWidth
    >
      {children}
    </Button>
  );
};

TodoButton.propTypes = {
  children: propTypes.node.isRequired,
  color: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
};

TodoButton.defaultProps = {
  color: 'primary',
  className: '',
  onClick: () => {},
};

export default TodoButton;
