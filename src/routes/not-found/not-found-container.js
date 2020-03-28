import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  chatAccountIsUserLoggedIn
} from '../../modules/chat-account';
import NotFoundView from './not-found-view';

const mapStateToProps = (state) => ({
  isUserLoggedIn: chatAccountIsUserLoggedIn(state)
});

class NotFoundContainer extends React.Component {
  render = () => (
    <NotFoundView
      isUserLoggedIn={this.props.isUserLoggedIn}
    />
  );
}

NotFoundContainer.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(NotFoundContainer);
