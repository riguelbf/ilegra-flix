import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Repository from './pages/Repository';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repository" component={Repository} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
