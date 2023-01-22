import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const formatDate = date => moment(date).format('LTS');

class Clock extends Component {
  constructor(props) {
    super();
    this.state = {
      location: props.location,
      time: getTimeWithOffset(props.offset),
    };

    setInterval(() => {
      const formatedTime = formatDate(getTimeWithOffset(props.offset));
      this.setState({
        time: formatedTime,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}
// formatDate(getTimeWithOffset(props.offset));
export default Clock;
