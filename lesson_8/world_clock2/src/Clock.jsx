import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.getTimeWithOffset = offset => {
      const currentTime = new Date();
      const utcOffset = currentTime.getTimezoneOffset() / 60;
      return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
    };

    this.formatDate = date => moment(date).format('LTS');

    this.state = {
      date: this.formatDate(this.getTimeWithOffset(this.props.offset)),
    };
  }
  componentDidMount() {
    this.timer = setInterval(
      () =>
        this.setState({
          date: this.formatDate(this.getTimeWithOffset(this.props.offset)),
        }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { location } = this.props;

    return (
      <div className="clock">
        <div className="clock__location">{location}</div>
        <div className="clock__time">{this.state.date}</div>
      </div>
    );
  }
}

export default Clock;
