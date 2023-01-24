import React from 'react';

const Logout = ({ onLogout }) => {
  console.log(onLogout);
  return <button onClick={event => onLogout(event)}>Logout</button>;
};

export default Logout;
