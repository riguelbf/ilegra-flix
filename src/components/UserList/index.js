import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import { Container, Body, Header } from './styles';

function UserList(props) {
  const { handleAddUser, handleLogin, users = [] } = props;

  return (
    <Container>
      <Header>Who's watching?</Header>
      <Body>
        {users.map(user => (
          <div onClick={() => handleLogin(user.name)}>
            <span>{user.name}</span>
          </div>
        ))}
        <div>
          <button type="button" onClick={() => handleAddUser()}>
            <FaPlus size={50} />
          </button>
          <span>Add user</span>
        </div>
      </Body>
    </Container>
  );
}

UserList.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;
