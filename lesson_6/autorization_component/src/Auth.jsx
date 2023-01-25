import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  state = {
    isLogin: false,
  };
  onLoginHandler = e => {
    this.setState({
      isLogin: true,
    });
  };
  onLogoutHandler = e => {
    this.setState({
      isLogin: false,
    });
  };
  render() {
    return (
      <>
        {this.state.isLogin ? (
          <Spinner size={50} />
        ) : (
          <>
            <Login onLogin={this.onLoginHandler} />
          </>
        )}
        <Logout onLogout={this.onLogoutHandler} isLogin={this.state.isLogin} />
      </>
    );
  }
}
export default Auth;
