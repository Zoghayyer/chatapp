import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import history from '../../lib/history';
import AppView from './app-view';

const AppContainer = (props) => (
  <Provider store={props.store}>
    <AppView history={history} />
  </Provider>
);

AppContainer.propTypes = {
  store: PropTypes.object.isRequired
};

export default AppContainer;