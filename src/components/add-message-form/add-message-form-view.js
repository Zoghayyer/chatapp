import React from 'react';
import PropTypes from 'prop-types';
import './add-message-form.scss';
import Button from '../button';

const AddMessageFormView = ({ handleMessageChange, handleSubmit, message }) => (
  <div className="pl-2 add-message-form">
    <form onSubmit={handleSubmit}>
      <div className="row m-auto">
        <div className="form-group col-md-8">
          <input
            type="text"
            onChange={handleMessageChange}
            value={message}
            className="form-control send-message"
            aria-describedby="message"
            placeholder="Type a message..."
          />
        </div>
        <div className="col-md-2 d-flex justify-content-center">
          <Button type="submit" theme="danger send-button">Send</Button>
        </div>
      </div>
    </form>
  </div>
);

AddMessageFormView.propTypes = {
  handleMessageChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default AddMessageFormView;