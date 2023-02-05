import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  state = {
    isVisible: false,
  };
  onToggler = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const { isVisible } = this.state;
    const { children, title } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.onToggler}>
            {isVisible ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        {isVisible && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}
Expand.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Expand.defaultProps = {
  title: '',
};
export default Expand;
