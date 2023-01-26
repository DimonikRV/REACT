import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  const numberFormater = new Intl.NumberFormat('en-GB');
  const timeFormater = moment(time);
  return (
    <li class="transaction">
      <span className="transaction__date">{timeFormater.format('DD MMM')}</span>
      <span className="transaction__time">{timeFormater.format('HH:mm')}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{numberFormater.format(rate)}</span>
      <span className="transaction__amount">{numberFormater.format(amount)}</span>
    </li>
  );
};

export default Transaction;
