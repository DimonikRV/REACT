import React from 'react';
import Dialog from './Dialog';
import './index.scss';

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
    return (
      <div className="app">
        <button className="btn" onClick={this.onShow}>
          Show dialog
        </button>
        <Dialog title="Recommendation" isOpen={this.state.isOpen} onClose={this.onClose}>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}
export default App;
