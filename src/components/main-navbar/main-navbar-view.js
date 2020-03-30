import React from 'react';
import PropTypes from 'prop-types';
import './main-navbar.scss';

const MainNavbarView = ({ roomName, users, username }) => {
  const usersList = users
                      .map((user, i) => (
                        <span
                          key={`${user}-${i}`}
                          className={`users-names ${user === username ? 'admin-color' : ''}`}
                        >
                          {user}{i !== users.length - 1 ? ', ' : ' '}
                        </span>
                      ));
  return (
    <div className="main-navbar">
      <div className="row d-flex flex-column main-navbar-header">
        <div className="col-md-6 text-center mb-3">
          <span className="room-name">{roomName}</span>
        </div>
        <div className="col-md-6 text-center">
          <div>
            {usersList}
          </div>
        </div>
      </div>
    </div>
  );
}

MainNavbarView.propTypes = {
  roomName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
};

export default MainNavbarView; 