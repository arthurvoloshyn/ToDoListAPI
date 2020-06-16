import React, { Component } from 'react';
import propTypes from 'prop-types';
import ErrorIndicator from '../ErrorIndicator';
import TodoButton from '../TodoButton';

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

  reload = () => window.location.reload();

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    if (isError) {
      return (
        <ErrorIndicator>
          <TodoButton onClick={this.reload}>Reload the page</TodoButton>
        </ErrorIndicator>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
