import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const ConnectionStatus = () => {
  const [connection, setConnection] = useState(true);

  useEffect(() => {
    const handleOnline = event => {
      const isOnline = event.target.navigator.onLine;
      setConnection(isOnline);
    };
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOnline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOnline);
    };
  }, []);

  const statusElem = classNames('status', { status_offline: !connection });
  const statusTxt = connection ? 'online' : 'offline';
  return <div className={statusElem}>{statusTxt}</div>;
};

export default ConnectionStatus;
