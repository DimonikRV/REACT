import React from "react";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";

class Page extends React.Component{
    state = {
        userData: null,
    }
    componentDidMount() {
        this.fetchUserData(this.props.userId)
  }

    fetchUserData = userId => {
      fetch(`https://api.github.com/users/${userId}`)
        .then(response => response.json())
        .then(data => this.setState({
            userData: data,
        }))
  };
  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData } />
        </header>
          < UserProfile userData={this.state.userData }/>
      </div>

    )
  }
}
export default Page;