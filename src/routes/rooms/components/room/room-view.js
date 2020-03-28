import React from 'react';
import PropTypes from 'prop-types';
import AdminMessages from './admin-messages';
import OthersMessages from './others-messages';

const RoomView = ({ othersMessages, adminMessages }) => (
  <div className="row">
    <OthersMessages messages={othersMessages} />
    <AdminMessages messages={adminMessages} />
  </div>
);

RoomView.propTypes = {
  adminMessages: PropTypes.array.isRequired,
  othersMessages: PropTypes.array.isRequired
};

export default RoomView;
