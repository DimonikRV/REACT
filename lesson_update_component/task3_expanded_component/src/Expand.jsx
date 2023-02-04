import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

class Expand extends React.Component {
  render() {
    const { children, title, onToggler, isVisible } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={onToggler}>
            {isVisible ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
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
  onToggler: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

Expand.defaultProps = {
  title: '',
};
export default Expand;
