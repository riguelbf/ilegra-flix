import React from 'react';
import PropType from 'prop-types';
import { FaPlay, FaPlus } from 'react-icons/fa';

import { Container } from './styles';

function ModalDetails(props) {
  const { movieSelected, className, handleClose } = props;

  return (
    <Container backdropPath={movieSelected.backdrop_path}>
      <div className={`container ${className}`}>
        <h1 className="title">{movieSelected.title || movieSelected.name}</h1>
        <p className="info">
          <p className="rating">Rating: {movieSelected.vote_average * 10}%</p>
          <p>Release date: </p>
          <p>Popularity: {movieSelected.popularity}</p>
        </p>
        <p className="overview">{movieSelected.overview}</p>
        <button className="btn-red">
          <FaPlay className="btn--icon" />
          <span>Play</span>
        </button>
        <button className="btn">
          <FaPlus className="btn--icon" />
          <span>ADD My List</span>
        </button>
        <button className="btn-close" onClick={() => handleClose()}>
          Close
        </button>
      </div>
    </Container>
  );
}

ModalDetails.defaultProps = {
  movieSelected: {
    title: 'movieSelected title',
    name: 'movieSelected name',
    release_date: 'Release date',
    first_air_date: 'First date',
    overview: 'Overview',
  },
  className: 'hide',
};

ModalDetails.propTypes = {
  movieSelected: PropType.shape({
    title: PropType.string.isRequired,
    name: PropType.string,
    release_date: PropType.string,
    first_air_date: PropType.string,
    overview: PropType.string,
  }),
  className: PropType.string,
};

export default ModalDetails;
