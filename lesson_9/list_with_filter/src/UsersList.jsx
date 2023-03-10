import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = {
    text: '',
  };

  onChange = event => {
    this.setState({
      text: event.target.value.toLowerCase(),
    });
  };

  render() {
    const usersList = this.props.users.filter(user =>
      user.name.toLowerCase().includes(this.state.text),
    );
    const counter = usersList.length;
    return (
      <div>
        <Filter filterText={this.state.text} count={counter} onChange={this.onChange} />
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
