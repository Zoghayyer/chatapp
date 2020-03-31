import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './sidebar.scss';

const SidebarView = ({ chatRooms, currentUserLoginTime, handleFocus, selectedRoom, username }) => {
  const chatRoomsList = chatRooms.map(({name, id}, index) => (
    <li key={`${name}-${id}-${index}`} className={`nav-item ${selectedRoom === name ? 'selectedRoom' : ''}`}>
      <Link
        to={`/rooms/${id}`}
        data-value={name}
        className="nav-link pl-0 text-nowrap link-color"
      >
        <span>{name}</span>
      </Link>
    </li>
  ));

  return (
    <div className="col-4 col-md-2 p-0 fixed-top sidebar">
      <div className="username">
        <span>{username}</span>
        {
          currentUserLoginTime > 0 &&
          <div className="login-time">Online for {currentUserLoginTime} minutes</div>
        }
      </div>
      <ul
        onFocus={handleFocus}
        className="flex-md-column flex-column navbar-nav w-100 justify-content-between"
      >
        {chatRoomsList}
      </ul>
    </div>
  );
};

SidebarView.propTypes = {
  chatRooms: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  handleFocus: PropTypes.func.isRequired,
  selectedRoom: PropTypes.string.isRequired,
  currentUserLoginTime: PropTypes.number.isRequired
};

export default SidebarView;