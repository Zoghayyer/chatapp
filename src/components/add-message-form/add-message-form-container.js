import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  roomMessagesRequestGet,
  roomMessagesRequestPost
} from '../../modules/chat-rooms';
import {
  chatAccountUsername
} from '../../modules/chat-account';
import {
  uiChatRoomsRoomKey
} from '../../modules/ui';
import AddMessageFormView from './add-message-form-view';

const mapDisptachToProps = {
  roomMessagesRequestGet,
  roomMessagesRequestPost
};

const mapStateToProps = (state) => ({
  chatAccountUsername: chatAccountUsername(state),
  uiChatRoomsRoomKey: uiChatRoomsRoomKey(state)
});

class AddMessageFormContainer extends React.Component {
  state = {
    message: ''
  };

  handleMessageChange = (event) => {
    const { target: { value = ''} = {} } = event;

    this.setState({
      message: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { message } = this.state;
    const messagePayload = {
      name: this.props.chatAccountUsername,
      message
    };
    const roomKey = this.props.uiChatRoomsRoomKey;

    await this.props.roomMessagesRequestPost(roomKey, messagePayload);
    this.props.roomMessagesRequestGet(roomKey);
    // Clear input field after adding a message
    this.setState({ message: '' });
  };

  componentDidUpdate = () => {
    const roomKey = this.props.uiChatRoomsRoomKey;
    this.props.roomMessagesRequestGet(roomKey);
  }

  render = () => (
    <AddMessageFormView
      handleMessageChange={this.handleMessageChange}
      handleSubmit={this.handleSubmit}
      message={this.state.message}
    />
  );
}

AddMessageFormContainer.propTypes = {
  chatAccountUsername: PropTypes.string.isRequired,
  roomMessagesRequestGet: PropTypes.func.isRequired,
  roomMessagesRequestPost: PropTypes.func.isRequired,
  uiChatRoomsRoomKey: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDisptachToProps)(AddMessageFormContainer);