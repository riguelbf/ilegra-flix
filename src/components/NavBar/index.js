import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Container } from './styles';

function NavBar(props) {
  const { options } = props;

  if (!options || !options.length) {
    return 'Do not exists menu options';
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

NavBar.defaultProps = {
  options: [
    { link: '/movies', description: 'Movies' },
    { link: '/tvshows', description: 'Tv shows' },
    { link: '/mylist', description: 'My list' },
  ],
};

NavBar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default NavBar;
