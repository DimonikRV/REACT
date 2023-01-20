import React from 'react';
import './avatar.scss';

function Avatar(props) {
  return <img className="avatar" src={props.userUrl} alt={props.name} />;
}
export default Avatar;
