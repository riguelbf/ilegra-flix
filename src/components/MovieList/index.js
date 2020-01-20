import React from 'react';
import { Container } from './styles';

import MovieItem from '../MovieItem';

export default function MovieList(props) {
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
