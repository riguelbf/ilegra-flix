import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import MovieList from '../../components/MovieList';
import { MovieService } from '../../service/movieService';

export default function Home() {
  const [groups, setGroups] = useState({ groups: [] });

  async function fetchGroups() {
    const groupsResult = await MovieService.getMovies();
    setGroups(groupsResult);
  }

  useEffect(() => {
   fetchGroups();
  }, []);

  return (
    <Container>
      <MovieList groups={groups} />
    </Container>
  );
}
