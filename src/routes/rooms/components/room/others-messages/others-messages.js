import React from 'react';
import PropTypes from 'prop-types';

const OthersMessages = ({ messages }) => (
  <div className="col-md-6">
  {
    messages.map(({ message, id }, i) => (
      <div key={`${id}-${i}`}>{message}</div>
    ))
  }
  </div>
);

OthersMessages.propTypes = {
  messages: PropTypes.array.isRequired
};

export default OthersMessages;
