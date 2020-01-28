import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MdPortrait } from 'react-icons/md';
import { Container, ProfileDetails } from './styles';
import NavBar from '../NavBar';

import logo from '../../assets/images/logo.png';
import { userService } from '../../service/userService';

export default function Header() {
  const [currentUser, setcurrentUser] = useState({
    currentUser: {
      name: '',
    },
    watchedMovies: [],
  });

  async function handleCurrentUser() {
    await userService.getCurrentUser().then(user => setcurrentUser(user));
  }

  useEffect(() => {
    handleCurrentUser();
  }, []);

  return (
    <Container>
      <Link to="/">
        <img data-testid="logo" src={logo} alt="IlegraFlix" />
      </Link>
      <NavBar />
      <ProfileDetails data-testid="profile-details" to="/profile">
        <MdPortrait size={50} color="#ed2337" />
        <div>
          <span>{currentUser.currentUser.name || 'User not found'}</span>
          <span>{`${0} items já assistidos`}</span>
        </div>
      </ProfileDetails>
    </Container>
  );
}
