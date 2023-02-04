import React from 'react';

class Dialog extends React.Component {
  render() {
    const { children, isOpen, onClose, title } = this.props;
    if (!isOpen) {
      return null;
    }
    return (
      <div class="dialog">
        <div class="dialog__heading">
          <h4 class="dialog__title">{title}</h4>
          <button class="dialog__close-btn" onClick={onClose}>
            +
          </button>
        </div>
        <div class="dialog__content">{children}</div>
      </div>
    );
  }
}
export default Dialog;
