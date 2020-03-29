import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  chatRoomsRequestGetIsLoading,
  chatRoomsIsStale,
  roomDetailsRequestGet,
  roomMessagesRequestGet,
  roomsRequestGet,
  roomsStale
} from '../../modules/chat-rooms';
import {
  uiChatRoomsRoomKeyUpdate,
  uiChatRoomsRoomKey
} from '../../modules/ui';
import Loader from '../../components/loader';
import RoomsView from './rooms-view';

const mapDisptachToProps = {
  roomDetailsRequestGet,
  roomMessagesRequestGet,
  roomsRequestGet,
  roomsStale,
  uiChatRoomsRoomKeyUpdate
};

const mapStateToProps = (state) => ({
  chatRoomsRequestGetIsLoading: chatRoomsRequestGetIsLoading(state),
  chatRoomsIsStale: chatRoomsIsStale(state),
  roomKey: uiChatRoomsRoomKey(state)
});

class RoomsContainer extends React.Component {
  roomKeyPathParam = ()  => {
    const { match: { params: { key } = {} } = {} } = this.props;
    return key || '';
  };

  loadMessages = async (currentRoomKey) => {
    await this.props.roomMessagesRequestGet(currentRoomKey);
    this.props.roomDetailsRequestGet(currentRoomKey);
    this.props.uiChatRoomsRoomKeyUpdate(currentRoomKey);
    this.props.roomsStale(false);
  };

  componentDidMount = async () => {
    await this.props.roomsRequestGet();
    const currentRoomKey = this.roomKeyPathParam();
    if (!!currentRoomKey) {
      this.loadMessages(currentRoomKey);
    }
  };

  componentDidUpdate = (prevProps) => {
    const currentRoomKey = this.roomKeyPathParam();
    const { chatRoomsIsStale, match: { params: { key = '' } = {} } = {} } = prevProps;

    // If user changes rooms or current chat room messages are stale, then request messages again
    if (
      (!!currentRoomKey && key !== this.roomKeyPathParam()) || (!chatRoomsIsStale && this.props.chatRoomsIsStale)
    ) {
      this.loadMessages(currentRoomKey);
    }
  };

  render = () => {
    const { chatRoomsRequestGetIsLoading, roomKey } = this.props;
    if (chatRoomsRequestGetIsLoading) {
      return <Loader />;
    }
  
    return (
      <RoomsView
        roomKey={roomKey}
      />
    )
  };
}

RoomsContainer.propTypes = {
  chatRoomsRequestGetIsLoading: PropTypes.bool.isRequired,
  chatRoomsIsStale: PropTypes.bool.isRequired,
  roomMessagesRequestGet: PropTypes.func.isRequired,
  roomsRequestGet: PropTypes.func.isRequired,
  roomDetailsRequestGet: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      key: PropTypes.string
    })
  }),
  roomKey: PropTypes.string.isRequired,
  roomsStale: PropTypes.func.isRequired,
  uiChatRoomsRoomKeyUpdate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDisptachToProps)(RoomsContainer);
