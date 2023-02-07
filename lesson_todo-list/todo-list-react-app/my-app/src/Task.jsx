import React from 'react';
import classNames from 'classnames';

const Task = ({ updateTaskFunc, deleteTaskFunc, done, text, id }) => {
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={() => updateTaskFunc(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => deleteTaskFunc(id)}></button>
    </li>
  );
};
export default Task;
