import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  chatAccountUsernameUpdate
} from '../../modules/chat-account';
import Session from '../../lib/session';
import LoginView from './login-view';
import uuid from 'uuid';

const mapDispatchToProps = {
  chatAccountUsernameUpdate
}

class LoginContainer extends React.Component {
  state = {
    username: '',
    invalidLogin: false
  };

  validateUsername = (username = '') => (
    !!username.length && username.replace(/[^a-zA-Z0-9 ' ']/g, '').length === username.length
  );

  handleSubmit = (event) => {
    event.preventDefault();
    const { username =  ''} = this.state;

    if (this.validateUsername(username)) {
      const generateUniqueId = uuid.v4();
      const loginTime = Date.now();
      const userDetails = {
        username,
        id: generateUniqueId,
        loginTime
      };
      // Store username in redux
      this.props.chatAccountUsernameUpdate(userDetails);
      // Store username in the window.sessionStorage
      Session.setItem('user', JSON.stringify(userDetails));
      // Redirect users to the design chat page by default
      this.props.history.push('/rooms');
      return;
    }
    this.setState({
      invalidLogin: true
    });
  };

  handleUsernameChange = (event) => {
    const { target: { value = ''} = {}} = event;

    this.setState({
      username: value
    });
  }

  render = () => (
    <LoginView
      handleSubmit={this.handleSubmit}
      handleUsernameChange={this.handleUsernameChange}
      username={this.state.username}
      invalidLogin={this.state.invalidLogin}
    />
  );
}

LoginContainer.propTypes = {
  chatAccountUsernameUpdate: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(LoginContainer);
