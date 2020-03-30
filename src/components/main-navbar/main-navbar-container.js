import { connect } from 'react-redux';
import {
  chatRoomsByKeyRoomName,
  chatRoomsByKeyRoomUsers
} from '../../modules/chat-rooms';
import {
  uiChatRoomsRoomKey
} from '../../modules/ui';
import {
  chatAccountUsername
} from '../../modules/chat-account';
import MainNavbarView from './main-navbar-view';

const mapStateToProps = (state) => {
  const roomKey = uiChatRoomsRoomKey(state);
  return {
    username: chatAccountUsername(state),
    roomName: chatRoomsByKeyRoomName(state, roomKey),
    users: chatRoomsByKeyRoomUsers(state, roomKey)
  }
};

export default connect(mapStateToProps)(MainNavbarView);