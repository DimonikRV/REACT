import React from 'react';
import './toggler.scss';

const OnState = 'On';
const Offstate = 'Off';

const toggle = status => {
  return status === Offstate ? OnState : Offstate;
};
class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: Offstate,
    };
  }
  ToggleStatus = status => {
    this.setState({
      status: toggle(status),
    });
  };
  render() {
    return (
      <div className="toggler" onClick={() => this.ToggleStatus(this.state.status)}>
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;
