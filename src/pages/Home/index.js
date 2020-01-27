import React, { useState, useLayoutEffect } from 'react';

import { Container } from './styles';
import ModalDetails from '../../components/ModalDetails';
import MovieList from '../../components/MovieList';
import { MovieService } from '../../service/movieService';

export default function Home() {
  const [movies, setMovies] = useState({});
  const [className, setClassName] = useState('hide');

  async function fetchGroups() {
    const moviesResult = await MovieService.getMovies();
    await setMovies(moviesResult);
  }

  useLayoutEffect(() => {
    fetchGroups();
  }, []);

  async function handleModal() {
    const newClassName = className === 'hide' ? 'show' : 'hide';
    await setClassName(newClassName);
  }

  return (
    <>
      <Container>
        <MovieList groups={movies.groups} onShowModal={handleModal} />
      </Container>
      <ModalDetails className={className} />
    </>
  );
}
