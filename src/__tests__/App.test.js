import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Main/i);
  expect(linkElement).toBeInTheDocument();
});

test('should make an test', () => {
  expect(1 + 1).toBe(2);
})
