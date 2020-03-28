import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import './loader.scss';

const Loader = ({ size }) => (
  <div className="row d-flex justify-content-center">
    <Spinner animation="border" role="status" className="loader-color" size={size}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

Loader.defaultProps = {
  size: 'md'
};

Loader.propTypes = {
  size: PropTypes.oneOf(['sm', 'md'])
};

export default Loader;