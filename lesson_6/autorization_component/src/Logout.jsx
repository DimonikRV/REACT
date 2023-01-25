import React from 'react';

const Logout = ({ onLogout }) => {
  return (
    <button className="logout btn" onClick={e => onLogout(e)}>
      Logout
    </button>
  );
};

export default Logout;
