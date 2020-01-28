import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { userService } from '../../service/userService';

export default function Profile() {
  const [userData, setUserData] = useState({});

  async function handleCurrentUser() {
    const currentUser = await userService.getCurrentUser();
    debugger;
    setUserData(currentUser);
  }

  useEffect(() => {
    handleCurrentUser();
  }, []);

  return (
    <Container>
      <h1 className="title-pen">User Profile</h1>
      <div className="user-profile">
        <img
          className="avatar"
          src="http://www.conpra.cradf.org.br/images/no-user.png"
          alt="Ash"
        />
        <div className="username">{userData.name || 'Not found'}</div>
        <div className="line">
          <span>Already watched by type</span>
        </div>
        <ul className="data">
          <li>
            <span className="entypo-heart">{`Action movies: ${127}`}</span>
          </li>
          <li>
            <span className="entypo-eye">{`Documentary movies: ${127}`}3</span>
          </li>
          <li>
            <span className="entypo-user">{`Tv Show: ${127}`}</span>
          </li>
          <li>
            <span className="entypo-user">{`Tv Show: ${127}`}</span>
          </li>
          <li>
            <span className="entypo-user">{`Tv Show: ${127}`}</span>
          </li>
          <li>
            <span className="entypo-user">{`Tv Show: ${127}`}</span>
          </li>
          <li>
            <span className="entypo-user">{`Tv Show: ${127}`}</span>
          </li>
          <li>
            <span className="entypo-user">{`Tv Show: ${127}`}</span>
          </li>
        </ul>
      </div>
      {/* <footer>
        <h1>
          inspired by
          <a href="https://dribbble.com/shots/1033074-User-Profile">
            <span className="entypo-dribbble" /> shot
          </a>
        </h1>
      </footer> */}
    </Container>
  );
}
