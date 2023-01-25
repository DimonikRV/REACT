import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <button className="login btn" onClick={e => onLogin(e)}>
      Login
    </button>
  );
};

export default Login;
