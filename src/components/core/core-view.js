import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import '../../styles/_base.scss';
import Login from '../../routes/login';
import NotFound from '../../routes/not-found';
import Rooms from '../../routes/rooms';

const CoreView = () => (
  <div id="app-content" className="container-fluid">
    <Switch>
      <Route
        exact
        path="/rooms/:key?"
        component={Rooms}
      />
      <Route
        exact
        path="/"
        component={Login}
      />
      <Route
        component={NotFound}
      />
    </Switch>
  </div>
);

export default CoreView;
