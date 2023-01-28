import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  ToggleHandler = () => {
    this.setState({
      visible: this.state.visible ? false : true,
    });
  };

  render() {
    return (
      <div>
        <button className="btn" onClick={this.ToggleHandler}>
          Switch
        </button>
        <div>
          {this.state.visible && (
            <div>
              <Clock location="London" offset={0} />
              <Clock location="Kyiv" offset={2} />
              <Clock location="New York" offset={-5} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
