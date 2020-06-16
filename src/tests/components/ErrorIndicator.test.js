import React from 'react';
import { render } from '@testing-library/react';
import ErrorIndicator from '../../components/ErrorIndicator';

test('renders learn react link', () => {
  const { getByText } = render(<ErrorIndicator />);
  const textElement = getByText(/something went wrong!/i);
  expect(textElement).toBeInTheDocument();
});
