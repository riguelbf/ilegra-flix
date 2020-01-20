import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  const { options } = props;

  if(!options || !options.length){
    return "Do not exists menu options";
  }

  return (
    <Container>
      {options.map(option => (
        <li key={option.link} data-testid="menu-option">
          <Link to={option.link}>{option.description}</Link>
        </li>
      ))}
    </Container>
  );
}
