import React from 'react';
import Dialog from './Dialog';

class App extends React.Component {
  state = {
    isOpen: false,
  };
  onShow = event => {
    this.setState({
      isOpen: true,
    });
  };

  onClose = event => {
    this.setState({
      isOpen: false,
    });
  };
  render() {
    const elem = <p>'Use immutable array methods to work with data. It will help to avoid bugs'</p>;
    return (
      <div className="app">
        <button class="btn" onClick={this.onShow}>
          Show dialog
        </button>
        <Dialog title="Recommendation" isOpen={this.state.number} onClose={this.onClose}>
          {elem}
        </Dialog>
      </div>
    );
  }
}
export default App;
