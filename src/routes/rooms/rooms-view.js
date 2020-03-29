import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidebar';
import AddMessageForm from '../../components/add-message-form';
import MainNavbar from '../../components/main-navbar';
import Footer from '../../components/footer';
import Room from './components/room';
import Welcome from './components/welcome';

const RoomsView = ({ roomKey }) => (
  <div className="row">
    <div className="col-12 col-md-2">
      <Sidebar />
    </div>
    <div className="col-md-10 m-0 p-0">
      {
        !roomKey && <Welcome />
      }
      {
        roomKey &&
          <React.Fragment>
            <MainNavbar />
              <Room />
            <Footer>
              <AddMessageForm />
            </Footer> 
          </React.Fragment>
      }
    </div>
  </div>
);

RoomsView.propTypes = {
  roomKey: PropTypes.string.isRequired
};

export default RoomsView;