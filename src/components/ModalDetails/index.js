import React from 'react';
import PropType from 'prop-types';
import { FaPlay, FaPlus } from 'react-icons/fa';

import { Container } from './styles';

function ModalDetails(props) {
  const { movie, className } = props;

  return (
    <Container>
      <div className={`container ${className}`}>
        <h1 className="title">{movie.title || movie.name}</h1>
        <p className="info">
          <span className="rating">Rating: {movie.vote_average * 10}%</span>
          Release date: {movie.release_date ||
            movie.first_air_date} Runtime:{' '}
          {movie.runtime || movie.episode_run_time}m
        </p>
        {/* <p className="episode">
          {movie.number_of_episodes
            ? ` Episodes: ${movie.number_of_episodes}`
            : ''}
          {movie.number_of_seasons
            ? ` Seasons: ${movie.number_of_seasons}`
            : ''}
        </p> */}
        <p className="overview">{movie.overview}</p>
        <button className="btn-red">
          <FaPlay className="btn--icon" />
          <span>Play</span>
        </button>
        <button className="btn">
          <FaPlus className="btn--icon" />
          <span>ADD My List</span>
        </button>
      </div>
    </Container>
  );
}

ModalDetails.defaultProps = {
  movie: {
    title: 'Movie title',
    name: 'Movie name',
    release_date: 'Release date',
    first_air_date: 'First date',
    overview: 'Overview',
  },
  className: 'hide',
};

ModalDetails.propTypes = {
  movie: PropType.shape({
    title: PropType.string.isRequired,
    name: PropType.string,
    release_date: PropType.string,
    first_air_date: PropType.string,
    overview: PropType.string,
  }),
  className: PropType.string,
};

export default ModalDetails;
