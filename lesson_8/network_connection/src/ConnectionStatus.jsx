import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };
  componentDidMount() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }
  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }
  onOnline = e => {
    this.setState({
      status: 'online',
    });
  };
  onOffline = e => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    return (
      <>
        {this.state.status !== 'online' ? (
          <div className="status status_offline">Offline</div>
        ) : (
          <div className="status">Online</div>
        )}
      </>
    );
  }
}
export default ConnectionStatus;
