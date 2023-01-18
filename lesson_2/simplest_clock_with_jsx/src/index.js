import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElem = document.getElementById('root');

const timerRender = time => {
  const seconds = new Date(time).getSeconds();

  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const texstColor = seconds % 2 !== 0 ? '#fff' : '#000';
  const styles = {
    backgroundColor,
    color: texstColor,
  };

  const element = (
    <div className="seconds" style={styles}>
      {`Now is ${seconds}`}
    </div>
  );
  ReactDOM.render(element, rootElem);
};
const setTimer = setInterval(timerRender(new Date()), 1000);
