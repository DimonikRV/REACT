import React, { useState } from 'react';

const Counter = () => {
  const [counter, SetCounter] = useState(17);

  return (
    <div className="counter">
      <button className="counter__button" onClick={() => SetCounter(counter - 1)}>
        -
      </button>
      <span className="counter__value" onClick={() => SetCounter(0)}>
        {counter}
      </span>
      <button className="counter__button" onClick={() => SetCounter(counter + 1)}>
        +
      </button>
    </div>
  );
};
export default Counter;
