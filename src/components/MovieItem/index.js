import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function MovieItem(props) {
  const { movieDetail } = props;
  return (
    <Container>
      <img
        data-testid="cover-image"
        src={movieDetail.poster_path}
        alt="Folder"
      />
    </Container>
  );
}

MovieItem.propTypes = {
  // eslint-disable-next-line react/require-default-props
  movieDetail: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
  }),
};

export default MovieItem;
