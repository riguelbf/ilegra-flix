import React from 'react';

import { render } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home component integration test', () => {
  test('should render component with movie list from api', () => {
    const { getByTestId } = render(<Home />);
    const groups = getByTestId('movielist-group');
    expect(groups).toEqual([]);
  });
});
