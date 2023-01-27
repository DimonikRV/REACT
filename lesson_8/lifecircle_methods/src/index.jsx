import React from 'react';
import ReactDOM from 'react-dom';
import Life from './Life';

const rootElem = document.getElementById('root');

ReactDOM.render(<Life number={Math.round(Math.random() * 100)} />, rootElem);
