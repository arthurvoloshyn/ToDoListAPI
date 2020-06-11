import React, { Component } from 'react';
import propTypes from 'prop-types';
import ErrorIndicator from '../ErrorIndicator';

class ErrorBoundary extends Component {
  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  static propTypes = {
    children: propTypes.node.isRequired,
  };

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    return isError ? <ErrorIndicator /> : children;
  }
}

export default ErrorBoundary;
