import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ProfileDetails } from './styles';
import { MdPortrait } from 'react-icons/md';
import NavBar from "../../components/NavBar";

import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img data-testid="logo" src={logo} alt="IlegraFlix" />
      </Link>
      <NavBar />
      <ProfileDetails data-testid="profile-details" to="/profile">
        <MdPortrait size={50} color="#ed2337;" />
        <div>
          <span>User name</span>
          <span>2 items já assistidos</span>
        </div>
      </ProfileDetails>
    </Container>
  );
}
