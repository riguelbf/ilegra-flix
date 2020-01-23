import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BASE_URL_IMAGES } from '../../../config';

import MovieItem from '../../../components/MovieItem';

describe('MovieItem component', () => {
  afterEach(cleanup);

  test('should render a movieItem', () => {
    const movieDetail = { poster_path: 'http://marvel.com/01' };
    const { getByTestId } = render(<MovieItem movieDetail={movieDetail} />);
    const posterPath = getByTestId('poster-path').src;
    expect(`/${BASE_URL_IMAGES}${movieDetail.poster_path}/`).toMatch(
      posterPath
    );
  });
});
