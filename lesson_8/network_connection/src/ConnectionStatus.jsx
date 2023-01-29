import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: null,
  };

  componentDidMount() {
    this.setState({
      status: 'online',
    });
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOnline);
  }
  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOnline);
  }
  onOnline = e => {
    this.setState({
      status: e.target.navigator.onLine ? 'online' : 'offline',
    });
  };

  render() {
    return (
      <>
        {this.state.status !== 'online' ? (
          <div className="status status_offline">{this.state.status}</div>
        ) : (
          <div className="status">{this.state.status}</div>
        )}
      </>
    );
  }
}
export default ConnectionStatus;
