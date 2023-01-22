import React from 'react';
import './counter.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countValue: 0,
    };
  }

  decrease = event => {
    this.setState({
      countValue: this.state.countValue - 1,
    });
  };
  increase = event => {
    this.setState({
      countValue: this.state.countValue + 1,
    });
  };
  reset = event => {
    this.setState({
      countValue: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <button data-action="decrease" className="counter__button" onClick={this.decrease}>
          -
        </button>
        <span className="counter__value" onClick={() => this.reset()}>
          {this.state.countValue}
        </span>
        <button data-action="increase" className="counter__button" onClick={this.increase}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
