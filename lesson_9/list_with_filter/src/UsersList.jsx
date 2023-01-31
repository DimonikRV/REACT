import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
      text: '',
      counter: null,
    };
  }
  onChange = event => {
    this.setState({
      text: event.target.value.toLowerCase(),
    });
  };
  usersCounter = () => {
    const { users } = this.state;
    this.setState({
      counter: users.filter(user => user.name.toLowerCase().includes(text)).length(),
    });
  };

  render() {
    return (
      <div>
        <Filter filterText={this.state.text} count={this.state.counter} onChange={this.onChange} />
        <ul className="users">
          {this.state.users.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
