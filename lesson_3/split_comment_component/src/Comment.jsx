import React from 'react';
import './comment.scss';
import UserInfo from './UserInfo';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YYYY');
function Comment(props) {
  return (
    <div className="comment">
      <UserInfo author={props.author} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
