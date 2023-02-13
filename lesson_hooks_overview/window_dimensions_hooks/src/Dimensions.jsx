import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: '',
    height: '',
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({
      width: innerWidth,
      height: innerHeight,
    });
    const onResizeHandler = event => {
      const { innerWidth, innerHeight } = event.target;
      setDimensions({
        width: innerWidth,
        height: innerHeight,
      });
    };
    window.addEventListener('resize', onResizeHandler);
    return () => {
      window.removeEventListener('resize', onResizeHandler);
    };
  }, []);
  const { width, height } = dimensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
