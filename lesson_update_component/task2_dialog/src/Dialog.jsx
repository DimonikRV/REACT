import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{title}</h4>
        <button classNames="dialog__close-btn" onClick={onClose}>
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};
Dialog.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};
Dialog.defaultProps = {
  title: '',
  isOpen: false,
};

export default Dialog;
