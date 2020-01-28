import React, { useState, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { MdSignalCellularConnectedNoInternet4Bar } from 'react-icons/md';
import { Container } from './styles';
import ModalDetails from '../../components/ModalDetails';
import MovieList from '../../components/MovieList';
import { MovieService } from '../../service/movieService';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState({});
  const [movieSelected, setMovieSelected] = useState({});
  const [className, setClassName] = useState('hide');

  async function fetchGroups() {
    const moviesResult = await MovieService.getMovies();
    await setMovies(moviesResult);
  }

  useLayoutEffect(() => {
    fetchGroups();
  }, []);

  async function handleModal(movieSelected) {
    const newClassName = className === 'hide' ? 'show' : 'hide';
    setMovieSelected(movieSelected);
    await setClassName(newClassName);
    console.log(movieSelected);
  }

  return (
    <>
      <Container>
        <MovieList groups={movies.groups} onShowModal={handleModal} />
      </Container>
      <ModalDetails
        className={className}
        movieSelected={movieSelected}
        handleClose={handleModal}
      />
    </>
  );
}
