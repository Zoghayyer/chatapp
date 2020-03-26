import React from 'react';
import PropTypes from 'prop-types';
import FooterView from './footer-view';

const FooterContainer = ({ children }) => (
  <FooterView children={children} />
);

FooterContainer.propTypes = {
  children: PropTypes.any.isRequired
};

export default FooterContainer;