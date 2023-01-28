import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };
  componentDidMount() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
    this.setStatus();
  }
  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }
  onOnline = e => {
    this.setStatus(e.target);
  };
  onOffline = e => {
    this.setStatus(e.target);
  };
  setStatus = status => {
    this.setState({
      status: status ? 'offline' : 'online',
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
