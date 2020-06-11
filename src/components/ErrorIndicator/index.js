import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';

const ErrorIndicator = ({ children }) => (
  <div>
    <Divider>Something went wrong!</Divider>
    {children}
  </div>
);

ErrorIndicator.propTypes = {
  children: PropTypes.node,
};

ErrorIndicator.defaultProps = {
  children: null,
};

export default ErrorIndicator;
