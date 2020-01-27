import React from 'react';
import PropTypes from 'prop-types';
import { BASE_URL_IMAGES } from '../../config';
import { Container } from './styles';

function MovieItem(props) {
  const { movieDetail, onShowModal } = props;
  return (
    <Container>
      <img
        data-testid="poster-path"
        src={`${BASE_URL_IMAGES}${movieDetail.poster_path}`}
        alt="Folder"
        onClick={() => onShowModal()}
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
