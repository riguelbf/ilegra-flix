import React from 'react';
import { render } from '@testing-library/react';

import MovieList from '../../../components/MovieList';

describe('MovieList component', () => {
  test('should render an message that have not movies for to list', () => {
    const { getByText } = render(<MovieList />);

    expect(getByText(/Do not exists movies for list/i)).toBeInTheDocument();
  });

  test('should render a list of movies options', () => {
    const fakeGroups = {
      groups: [
        {
          name: 'NetFlix original',
          movies: [
            { poster_path: 'http://marvel.com/01' },
            { poster_path: 'http://marvel.com/02' },
            { poster_path: 'http://marvel.com/03' },
          ],
        },
      ],
    };

    const { getAllByTestId } = render(<MovieList groups={fakeGroups.groups} />);

    const movies = getAllByTestId('poster-path');

    expect(movies.length).toEqual(fakeGroups.groups[0].movies.length);
  });
});
