import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';
import Profile from './pages/Profile';

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
        <Route path="/profile" component={Profile} />
      </Switch>
  );
}
