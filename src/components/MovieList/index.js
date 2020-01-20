import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import MovieItem from '../MovieItem';

function MovieList(props) {
  const { movies } = props;

  if (!movies || !movies.length) {
    return 'Do not exists movies for list';
  }

  return (
    <Container>
      {movies.map((movie, index) => (
        <MovieItem key={index} movieDetail={movie} />
      ))}
    </Container>
  );
}

MovieList.propsType = {
  movies: PropTypes.arrayOf(PropTypes.shape({ coverImage: PropTypes.string })),
};

export default MovieList;
