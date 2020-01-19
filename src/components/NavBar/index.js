import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Container>
        <li className="one"><Link to="/movies">Movies</Link></li>
        <li className="two"><Link to="/tvshow">Tv Shows</Link></li>
        <li className="three"><Link to="myList">My list</Link></li>
    </Container>
  );
}
