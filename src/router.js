import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Repository from './pages/Repository';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { withHeader } from './components/HOC/withHeader';

export default function Routes() {
  return (
    <Switch>
      <Route path="/home" exact component={withHeader(Home)} />
      <Route path="/repository" component={Repository} />
      <Route path="/profile" component={withHeader(Profile)} />
      <Route path="/" component={Login} />
    </Switch>
  );
}
