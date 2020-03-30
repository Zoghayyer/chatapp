import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  chatAccountUsername,
  chatAccountLoginTime
 } from '../../modules/chat-account';
import { chatRooms } from '../../modules/chat-rooms';
import SidebarView from './sidebar-view';

const mapStateToProps = (state, ownProps) => ({
  chatRooms: chatRooms(state),
  loginTime: chatAccountLoginTime(state),
  username: chatAccountUsername(state),
});

class SidebarContainer extends React.Component {
  state = {
    selectedRoom: ''
  };

  handleFocus = (event) => {
    const { target: { dataset: { value = '' } = {} } = {}}  = event;

    this.setState({
      selectedRoom: value
    });
  };

  currentUserLoginTime = () => {
    const calculateCurrentTime = Date.now() - this.props.loginTime;
    const minutes = Math.floor((calculateCurrentTime / 1000 / 60) % 60);
    return minutes;
  };

  render = () => (
    <SidebarView
      username={this.props.username}
      chatRooms={this.props.chatRooms}
      handleFocus={this.handleFocus}
      selectedRoom={this.state.selectedRoom}
      loginTime={this.props.loginTime}
      currentUserLoginTime={this.currentUserLoginTime()}
    />
  );
}

SidebarContainer.propTypes = {
  chatRooms: PropTypes.array.isRequired,
  loginTime: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(SidebarContainer);