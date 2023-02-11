import React from 'react';
import { useParams } from 'react-router-dom';

class User extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    const { userId } = useParams();
    this.setUserData(userId);
  }

  fetchUserData = userId => {
    return fetch(`https://api.github.com/users/${userId}`).then(response => {
      if (!response.ok) {
        return null;
      }
      return response.json();
    });
  };

  setUserData = userId => {
    this.fetchUserData(userId).then(data =>
      this.setState({
        userData: data,
      }),
    );
  };

  render() {
    const { avatar_url, name, location } = this.state.data;
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
