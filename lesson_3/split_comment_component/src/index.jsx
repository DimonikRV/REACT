import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment';

const rootElem = document.getElementById('root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com',
};
ReactDOM.render(<Comment author={userInfo} text="Good job!" date={new Date()} />, rootElem);
