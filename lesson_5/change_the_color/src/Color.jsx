import React from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Color extends React.Component {
  setBodyBackgraund = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={() => this.setBodyBackgraund(RED)}
        />
        <button
          className="colors__button"
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBodyBackgraund(GREEN)}
        />
        <button
          className="colors__button"
          style={{ backgroundColor: BLUE }}
          onClick={() => this.setBodyBackgraund(BLUE)}
        />
      </div>
    );
  }
}
export default Color;
