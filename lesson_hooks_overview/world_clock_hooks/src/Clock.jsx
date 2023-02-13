import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Clock = ({ location, offset }) => {
  const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  };

  const formatDate = date => moment(date).format('LTS');

  const [date, setDate] = useState(formatDate(getTimeWithOffset(offset)));

  useEffect(() => {
    const timer = setInterval(() => setDate(formatDate(getTimeWithOffset(offset))), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{date}</div>
    </div>
  );
};

export default Clock;
