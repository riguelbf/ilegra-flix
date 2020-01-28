import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container, Body, Header } from './styles';

const users = [
  {
    name: 'Huguinho',
  },
  {
    name: 'Zézinho',
  },
  {
    name: 'Luizinho',
  },
];

export default function Login() {
  return (
    <Container>
      <Header>Who's watching?</Header>
      <Body>
        {users.map(user => (
          <div>
            <span>{user.name}</span>
          </div>
        ))}
        <div>
          <button>
            <FaPlus size={50} />
          </button>
          <span>Add user</span>
        </div>
      </Body>
    </Container>
  );
}
