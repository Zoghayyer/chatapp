import React from 'react';
import { Router } from 'react-router-dom';
import Core from '../core';

const AppView = (props) => (
  <Router history={props.history}>
    <Core />
  </Router>
);

export default AppView;
