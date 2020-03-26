import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './sidebar.scss';

const SidebarView = ({ chatRooms }) => {
  const chatRoomsList = chatRooms.map(({name, id}, index) => (
    <li key={`${name}-${id}-${index}`} className="nav-item">
      <Link to={`/rooms/${id}`} className="nav-link pl-0 text-nowrap">
        <span>{name}</span>
      </Link>
    </li>
  ));

  return (
    <aside className="col-12 col-md-2 p-0 fixed-top sidebar">
        <nav className="navbar navbar-expand flex-md-column flex-row align-items-start py-2">
            <div className="collapse navbar-collapse align-items-start">
                <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                  {chatRoomsList}
                </ul>
            </div>
        </nav>
    </aside>
  );
};

SidebarView.propTypes = {
  chatRooms: PropTypes.array.isRequired
};

export default SidebarView;