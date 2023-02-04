import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    isVisible: false,
  };
  onToggler = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    return (
      <div className="app">
        <Expand title="Some title" isVisible={this.state.isVisible} onToggler={this.onToggler}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}
export default App;
