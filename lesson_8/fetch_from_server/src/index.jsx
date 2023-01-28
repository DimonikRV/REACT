import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import './index.scss';

const rootElem = document.getElementById('root');

ReactDOM.render(<User userId="facebook" />, rootElem);
