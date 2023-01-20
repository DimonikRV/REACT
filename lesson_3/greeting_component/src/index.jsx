import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const rootElem = document.getElementById('root');

ReactDOM.render(
  <Greeting firstName="Tom" lastName="Selek" birthDate={new Date(2019, 11, 31)} />,
  rootElem,
);
