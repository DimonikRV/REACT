import React from 'react';
import './colorpicker.scss';

const coral = 'Coral';
const aqua = 'Aqua';
const bisque = 'Bisque';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }
  setText = event => {
    const titleColor = event.target.style.backgroundColor;

    this.setState({
      color: titleColor,
    });
  };

  removeText = event => {
    this.setState({
      color: '',
    });
  };
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            style={{
              backgroundColor: coral,
            }}
            onMouseEnter={e => this.setText(e)}
            onMouseLeave={e => this.removeText(e)}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            style={{
              backgroundColor: aqua,
            }}
            onMouseEnter={e => this.setText(e)}
            onMouseLeave={e => this.removeText(e)}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            style={{
              backgroundColor: bisque,
            }}
            onMouseEnter={e => this.setText(e)}
            onMouseLeave={e => this.removeText(e)}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
