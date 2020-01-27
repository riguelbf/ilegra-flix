import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import MovieItem from '../MovieItem';

function MovieList(props) {
  const { groups, onShowModal } = props;

  if (!groups || !groups.length) {
    return 'Do not exists movies for list';
  }

  return (
    <Container>
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} data-testid="movielist-group">
          <h1>{group.name}</h1>
          <div>
            {group.movies.map((movie, index) => {
              return (
                <MovieItem
                  key={index}
                  movieDetail={movie}
                  onShowModal={onShowModal}
                />
              );
            })}
          </div>
        </div>
      ))}
    </Container>
  );
}

MovieList.propsType = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      coverImage: PropTypes.string.isRequired,
    })
  ),
  onShowModal: PropTypes.func,
};

export default MovieList;
