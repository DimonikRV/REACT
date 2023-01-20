import React from 'react';
import Avatar from './Avatar';
import './user_info.scss';

function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar name={props.author.name} userUrl={props.author.avatarUrl} />
      <div className="user-info__name">{props.author.name}</div>
    </div>
  );
}
export default UserInfo;
