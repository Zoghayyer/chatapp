import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../static/images/not-found.jpg';
import './not-found.scss';

const NotFound = ({ isUserLoggedIn }) => (
  <div className="d-flex flex-column align-items-center">
    <div className="not-found-image mb-4">
      <img src={notFoundImage} alt="Not found" />
    </div>
    <div className="mb-4">
      <span className="sorry-message">Sorry! We couldn't find the page you were looking for.</span>
    </div>
    <div>
      <Link to="/rooms" className="navigation-link">
        <span>Go to the main chat rooms</span>
      </Link>
    </div>
  </div>
);

export default NotFound;