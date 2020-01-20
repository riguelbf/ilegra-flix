import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../../../components/Header';

describe('header component', () => {
  test('should have a logo into component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = getByTestId('logo');
    const profileDetails = getByTestId('profile-details');

    expect(logo).toBeTruthy();
    expect(profileDetails).toBeTruthy();
  });
});
