import React from 'react';

const Logout = ({ onLogout, isLogin }) => {
  if (!isLogin) {
    return null;
  }
  return (
    <button className="logout btn" onClick={e => onLogout(e)}>
      Logout
    </button>
  );
};

export default Logout;
