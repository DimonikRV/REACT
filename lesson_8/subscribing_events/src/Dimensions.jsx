import React from 'react';

class Dimensions extends React.Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
    window.addEventListener('resize', this.onResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${height} x ${width}`;
  };
  render() {
    return <div className="dimensions"> {`${this.state.height}px - ${this.state.width}px`}</div>;
  }
}
export default Dimensions;
