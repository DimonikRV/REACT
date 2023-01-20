import React from 'react';
import Avatar from './Avatar';
import './user_info.scss';

function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar name={props.user.name} userUrl={props.user.userUrl} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
}
export default UserInfo;
