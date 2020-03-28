import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  chatRooms,
  chatRoomsIsLoading,
  roomMessagesRequestGet,
  roomsRequestGet
} from '../../modules/chat-rooms';
import {
  uiChatRoomsRoomKeyUpdate,
  uiChatRoomsRoomKey
} from '../../modules/ui';
import RoomsView from './rooms-view';
import Loader from '../../components/loader';

const mapDisptachToProps = {
  roomMessagesRequestGet,
  roomsRequestGet,
  uiChatRoomsRoomKeyUpdate
};

const mapStateToProps = (state) => ({
  chatRooms: chatRooms(state),
  chatRoomsIsLoading: chatRoomsIsLoading(state),
  roomKey: uiChatRoomsRoomKey(state)
});

class RoomsContainer extends React.Component {
  roomKeyPathParam = ()  => {
    const { match: { params: { key } = {} } = {} } = this.props;
    return key || '';
  }

  componentDidMount = async () => {
    await this.props.roomsRequestGet();
    const currentRoomKey = this.roomKeyPathParam();
    if (!!currentRoomKey) {
      this.props.roomMessagesRequestGet(currentRoomKey);
      this.props.uiChatRoomsRoomKeyUpdate(currentRoomKey);
    }
  }

  componentDidUpdate = (prevProps) => {
    const currentRoomKey = this.roomKeyPathParam();
    if (prevProps.match.params.key !== this.roomKeyPathParam() && !!currentRoomKey) {
      this.props.roomMessagesRequestGet(currentRoomKey);
      this.props.uiChatRoomsRoomKeyUpdate(currentRoomKey);
    }
  }

  render = () => (
    <RoomsView
      chatRooms={this.props.chatRooms}
      roomKey={this.props.roomKey}
    />
  );
}

RoomsContainer.propTypes = {
  chatRooms: PropTypes.array.isRequired,
  chatRoomsIsLoading: PropTypes.bool.isRequired,
  roomMessagesRequestGet: PropTypes.func.isRequired,
  roomsRequestGet: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      key: PropTypes.string
    })
  }),
  roomKey: PropTypes.string.isRequired,
  uiChatRoomsRoomKeyUpdate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDisptachToProps)(RoomsContainer);
