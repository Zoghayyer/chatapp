import React from 'react';
import { connect } from 'react-redux';
import { uiChatRoomsRoomKey } from '../../../../modules/ui';
import { chatAccountUserId } from '../../../../modules/chat-account';
import { chatRoomsByKeyRoomMessages } from '../../../../modules/chat-rooms';
import RoomView from './room-view';

const mapStateToProps = (state) => {
  const roomKey = uiChatRoomsRoomKey(state);
  return {
    roomMessages: chatRoomsByKeyRoomMessages(state, roomKey),
    chatAccountUserId: chatAccountUserId(state)
  };
};

class RoomContainer extends React.Component {
  constructor(props) {
    super(props);

    this.scrollRef = React.createRef();
  }

  scrollToBottom = ()  => {
    this.scrollRef.current.scrollTop = this.scrollRef.current.scrollHeight;
  };

  componentDidMount = () => this.scrollToBottom();

  componentDidUpdate = () => this.scrollToBottom();

  render = () => (
    <RoomView
      roomMessages={this.props.roomMessages}
      chatAccountUserId={this.props.chatAccountUserId}
      scrollRef={this.scrollRef}
    />
  )
}


export default connect(mapStateToProps)(RoomContainer);