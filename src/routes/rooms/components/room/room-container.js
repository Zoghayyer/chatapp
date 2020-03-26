import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Selectors from '../../../../store/selectors';
import { uiChatRoomsRoomKey } from '../../../../modules/ui';
import RoomView from './room-view';

const mapStateToProps = (state) => {
  const roomKey = uiChatRoomsRoomKey(state);
  return {
    adminMessages: Selectors.chatRoomsByKeyRoomMessagesAdmin(state, roomKey),
    othersMessages: Selectors.chatRoomsByKeyRoomMessagesOthers(state, roomKey)
  };
};

class RoomContainer extends React.Component {
  render = () => (
    <div>
      {console.log('others', this.props.othersMessages)}
      {console.log('Admin', this.props.adminMessages)}
      <RoomView
        adminMessages={this.props.adminMessages}
        othersMessages={this.props.othersMessages}
      />
    </div>
  );
}

RoomContainer.propTypes = {
  adminMessages: PropTypes.array.isRequired,
  othersMessages: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(RoomContainer);