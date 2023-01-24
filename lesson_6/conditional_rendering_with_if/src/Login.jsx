import React from 'react';

const Login = ({ onLogin }) => {
  return <button onClick={event => onLogin(event)}>Login</button>;
};

export default Login;
