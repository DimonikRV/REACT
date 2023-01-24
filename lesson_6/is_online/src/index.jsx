import React from 'react';
import ReactDOM from 'react-dom';
import Status from './Status';
import './index.scss';

const rootElem = document.getElementById('root');

ReactDOM.render(<Status isOnline={true} />, rootElem);
