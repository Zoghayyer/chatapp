import React from 'react';
import PropTypes from 'prop-types';
import '../room.scss';

const AdminMessage = ({ message }) => (
  <div className="text-right mr-3 w-50 float-right">
    <div className="mb-3">
      <span className="message-container-right">{message}</span>
    </div>
  </div>
);

AdminMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default AdminMessage;
