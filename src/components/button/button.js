import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, theme, size, className, type }) => (
  <button
    type={type}
    className={`btn btn-${theme} btn-${size} ${className}`}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  theme: 'primary',
  size: ''
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string
};

export default Button;