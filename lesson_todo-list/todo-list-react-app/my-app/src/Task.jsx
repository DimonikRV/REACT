import React from 'react';
import classNames from 'classnames';

const Task = ({ done, text }) => {
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input type="checkbox" className="list-item__checkbox" defaultChecked={done} />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn"></button>
    </li>
  );
};
export default Task;
