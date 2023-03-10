import React from 'react';

class User extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    const { userId } = this.props;
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          user: data,
        }),
      );
  }

  render() {
    if (!this.state.user) {
      return null;
    }
    const { name, location, avatar_url } = this.state.user;
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
