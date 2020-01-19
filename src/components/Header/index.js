import React from 'react';

import { Container, ProfileDetails } from './styles';
import { MdPortrait } from 'react-icons/md';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <img data-testid="logo" src={logo} alt="IlegraFlix" />
      <ProfileDetails data-testid="profile-details">
        <MdPortrait size={50} color="#ed2337;"/>
        <div>
          <strong>User name</strong>
          <span>2 items já assistidos</span>
        </div>
      </ProfileDetails>
    </Container>
  );
}
