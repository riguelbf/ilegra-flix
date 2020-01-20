import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function MovieItem(props) {
  const { movieDetail } = props;
  return (
    <Container>
      <img data-testid="cover-image" src={movieDetail.coverImage} />
    </Container>
  );
}

MovieItem.propTypes = {
  movieDetail: PropTypes.shape({
    coverImage: PropTypes.string.isRequired
  })
};

export default MovieItem;
