import React from 'react';
import propTypes from 'prop-types';
import { Tooltip, Zoom } from '@material-ui/core';

const TodoTooltip = ({ children, title, ariaLabel, className, ...attrs }) => (
  <Tooltip
    {...attrs}
    className={className}
    title={title}
    aria-label={ariaLabel}
    TransitionComponent={Zoom}
    arrow
  >
    {children}
  </Tooltip>
);

TodoTooltip.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
  ariaLabel: propTypes.string,
  className: propTypes.string,
};

TodoTooltip.defaultProps = {
  ariaLabel: '',
  className: '',
};

export default TodoTooltip;
