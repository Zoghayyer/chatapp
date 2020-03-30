import React from 'react';
import PropTypes from 'prop-types';
import '../room.scss';

const NonAdminMessage = ({ message, name }) => (
  <div className="text-left ml-3 float-left w-50">
    <div className="mb-3">
      <span className="message-container-left">{message}</span>
      <div className="user-color">{name}</div>
    </div>
  </div>
);

NonAdminMessage.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default NonAdminMessage;
