import React from 'react';
import PropTypes from 'prop-types';
import AdminMessage from './admin-message';
import NonAdminMessage from './non-admin-message';
import './room.scss';

const RoomView = ({ chatAccountUserId, roomMessages, scrollRef }) => {
  const messages = roomMessages.map(({message, name, userId}, i) => {
    return chatAccountUserId === userId
      ? <AdminMessage key={`${userId}-${i}-${name}`}  message={message} />
      : <NonAdminMessage key={`${i}-${name}`} name={name} message={message} /> 
  });

  return (
    <div className="row room-section" ref={scrollRef}>
      <div className="col-md-12">
        {messages}
      </div>
    </div>
  );
}

RoomView.propTypes = {
  roomMessages: PropTypes.array.isRequired,
  chatAccountUserId: PropTypes.string.isRequired
};

export default RoomView;
