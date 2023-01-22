import React from 'react';
import './goodbutton.scss';

class GoodButton extends React.Component {
  render() {
    return (
      <button className="fancy-button" onClick={() => alert('Good job')}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
