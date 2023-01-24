import React from 'react';
import Info from './Info';

const text1 = 'Price is 500$. Available in 2 colors';
const text2 = 'Price is 650$. Not available in 1 color';

class Page extends React.Component {
  state = {
    text: null,
  };

  SetText = text => {
    this.setState({
      text,
    });
  };

  render() {
    return (
      <div className="page">
        <Info text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.SetText(text1)}>
            IPhone 13
          </button>
          <button className="btn" onClick={() => this.SetText(text2)}>
            IPhone 13 Pro
          </button>
          <button className="btn" onClick={() => this.SetText('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}
export default Page;
