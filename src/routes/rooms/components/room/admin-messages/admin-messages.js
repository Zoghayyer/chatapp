import React from 'react';
import PropTypes from 'prop-types';

const AdminMessages = ({ messages }) => (
  <div className="col-md-6 text-right">
    {messages.map(({ message, id }, i) => (
      <div key={`${id}-${i}`}>{message}</div>
    ))}
  </div>
);

AdminMessages.propTypes = {
  messages: PropTypes.array.isRequired
};

export default AdminMessages;