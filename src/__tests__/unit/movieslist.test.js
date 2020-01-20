import React from 'react';
import { render } from '@testing-library/react';

import MovieList from '../../components/MovieList';

describe('MovieList component', () => {
  test('should render an message that have not movies for to list', () => {
    const { getByText } = render(<MovieList />);

    expect(getByText(/Do not exists movies for list/i)).toBeInTheDocument();
  });

  test('should render a list of movies options', () => {
    const fakeMovies = Array.of(
      { coverImage: 'http://marvel.com/01' },
      { coverImage: 'http://marvel.com/02' },
      { coverImage: 'http://marvel.com/03' }
    );

    const { getAllByTestId } = render(<MovieList movies={fakeMovies} />);

    const movies = getAllByTestId('cover-image');
    // console.log(movies)

    expect(movies.length).toEqual(fakeMovies.length);
  });
});
