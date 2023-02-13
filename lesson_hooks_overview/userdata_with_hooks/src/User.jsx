import React from 'react';

class User extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    const { match } = this.props;
    this.setUserData(match.params.userId);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.userId !== match.params.userId) {
      this.setUserData(match.params.userId);
    }
  }

  fetchUserData = async userId => {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  };

  setUserData = userId => {
    this.fetchUserData(userId).then(userData =>
      this.setState({
        userData,
      }),
    );
  };

  render() {
    if (!this.state.userData) {
      return null;
    }
    const { avatar_url, name, location } = this.state.userData;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
