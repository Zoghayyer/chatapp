import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';

const FooterView = ({ children }) => (
  <div className="footer d-flex justify-content-center align-items-center">
    <div className="w-100 mt-3">
      {children}
    </div>
  </div>
);

FooterView.propTypes = {
  children: PropTypes.any.isRequired
};

export default FooterView;