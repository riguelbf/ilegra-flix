import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { userService } from '../../service/userService';

export default function Profile() {
  const [userData, setUserData] = useState({
    movies: { data: { results: [] } },
  });

  async function handleCurrentUser() {
    await userService.getCurrentUser().then(currentUser => {
      setUserData(currentUser);
    });
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
          alt="User image"
        />
        <div className="username">
          {(userData.currentUser && userData.currentUser.name) || 'Not found'}
        </div>
        <div className="line">
          <br />
          <span>List of movies watched</span>
        </div>
        <ul className="data">
          {/* {(userData.movies.data &&
            userData.movies.data.results(user => (
              <li>
                <span className="entypo-heart">{`Title: ${user.title} Votes: ${user.vote_count}`}</span>
              </li>
            ))) || (
            <li>
              <span className="entypo-heart">No movies watched yet</span>
            </li>
          )} */}
        </ul>
      </div>
    </Container>
  );
}
