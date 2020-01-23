import React, { useState, useLayoutEffect } from 'react';

import { Container } from './styles';
import MovieList from '../../components/MovieList';
import { MovieService } from '../../service/movieService';

export default function Home() {
  const [movies, setMovies] = useState({});

  async function fetchGroups() {
    const moviesResult = await MovieService.getMovies();
    await setMovies(moviesResult);
  }

  useLayoutEffect(() => {
   fetchGroups();
  }, []);

  return (
    <Container>
      <MovieList groups={movies.groups} />
    </Container>
  );
}
