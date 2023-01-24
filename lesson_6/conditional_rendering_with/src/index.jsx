import React from 'react';
import ReactDOM from 'react-dom';
import Mailbox from './Mailbox';
import './index.scss';

const rootElem = document.getElementById('root');

ReactDOM.render(<Mailbox unreadMessages={[3]} />, rootElem);
