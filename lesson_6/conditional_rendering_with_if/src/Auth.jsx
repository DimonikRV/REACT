import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
  };

  Login = event => {
    this.setState({
      isLoggedIn: true,
    });
  };
  Logout = event => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? <Logout onLogout={this.Logout} /> : <Login onLogin={this.Login} />}
      </div>
    );
  }
}
export default Auth;
