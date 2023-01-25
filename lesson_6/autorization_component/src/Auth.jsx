import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  state = {
    isLogin: false,
    spinner: false,
  };
  onLoginHandler = e => {
    this.setState({
      spinner: true,
    });
    setTimeout(
      () =>
        this.setState({
          isLogin: true,
          spinner: false,
        }),
      2000,
    );
  };

  onLogoutHandler = e => {
    this.setState({
      isLogin: false,
    });
  };
  render() {
    let button;
    if (this.state.isLogin) {
      button = <Logout onLogout={this.onLogoutHandler} />;
    } else {
      button = this.state.spinner ? <Spinner size={50} /> : <Login onLogin={this.onLoginHandler} />;
    }
    return <>{button}</>;
  }
}
export default Auth;
