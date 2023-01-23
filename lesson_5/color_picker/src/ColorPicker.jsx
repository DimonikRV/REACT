import React from 'react';
import './colorpicker.scss';

const coral = 'coral';
const aqua = 'aqua';
const bisque = 'bisque';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }
  setText = (color, event) => {
    this.setState({
      color,
    });
  };

  removeText = (color, event) => {
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
            onMouseOver={e => this.setText('Coral', e)}
            onMouseOut={e => this.removeText(e)}
          />
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={e => this.setText('Aqua', e)}
            onMouseOut={e => this.removeText(e)}
          />
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={e => this.setText('Bisque', e)}
            onMouseOut={e => this.removeText(e)}
          />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
