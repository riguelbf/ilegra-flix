import React from 'react';

import { render } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home component integration test', () => {
  test('should render component without movie list', () => {
    const { container } = render(<Home />);
    const groups = container.querySelector('div[data-testid="movielist-group"]');
    expect(groups).toEqual(null);
  });
});
