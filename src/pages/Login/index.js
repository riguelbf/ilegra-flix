import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import faker from 'faker';
import UserList from '../../components/UserList';

import { userService } from '../../service/userService';

export default function Login() {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const usersData = await userService.getUsers();
    setUsers(usersData);
  }

  async function handleAddUser() {
    const newUser = faker.name.findName();
    setUsers([...users, newUser]);
  }

  function handleLogin(userName = '') {
    history.push(`/home/?user=${userName}`);
  }

  useEffect(() => {
    getUsers();
  });

  return (
    <UserList
      handleLogin={handleLogin}
      handleAddUser={handleAddUser}
      users={users}
    />
  );
}
