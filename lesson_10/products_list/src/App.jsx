import React from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class Page extends React.Component {
  state = {
    userData: {
      firstName: '',
      lastName: '',
    },
  };

  handleChanges = event => {
    const { value, name } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };
  render() {
    const { firstName, lastName } = this.state.userData;
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${firstName} ${lastName}`}</h1>
        <main className="content">
          <ShoppingCart userName={firstName} />
          <Profile userData={this.state.userData} handleChanges={this.handleChanges} />
        </main>
      </div>
    );
  }
}
export default Page;
