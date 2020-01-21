import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NavBar from '../../../components/NavBar';

describe('navbar component', () => {
  afterEach(cleanup);

  test('should render component with 3 options', () => {
    const options = [
      { description: 'Movies', link: '/movies' },
      { description: 'Tv Shows', link: '/tvshows' },
      { description: 'My List', link: '/mylist' },
    ];

    const { getAllByTestId } = render(
      <MemoryRouter>
        <NavBar options={options} />
      </MemoryRouter>
    );

    const descriptions = getAllByTestId('menu-option').map(
      li => li.textContent
    );

    const fakeDescriptions = options.map(option => option.description);
    expect(descriptions).toEqual(fakeDescriptions);
  });

  test('should render just message that not exist options', () => {
    const options = [];

    const { getByText } = render(
      <MemoryRouter>
        <NavBar options={options} />
      </MemoryRouter>
    );
    expect(getByText(/Do not exists menu options/i)).toBeInTheDocument();
  });
});
