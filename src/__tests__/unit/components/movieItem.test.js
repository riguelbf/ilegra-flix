import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';

import MovieItem from "../../../components/MovieItem";

describe('MovieItem component', () => {

  afterEach(cleanup);

  test('should render a movieItem', () => {

    const movieDetail = { coverImage: 'http://marvel.com/01' };

    const { getByTestId } = render(<MovieItem movieDetail={movieDetail}/>);
    const coverImage = getByTestId('cover-image').src;

    console.log(coverImage);
    expect(movieDetail.coverImage).toEqual(coverImage);
  });
});
