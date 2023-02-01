import React from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends React.Component {
  state = {
    productsList: [
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
      {
        id: '1',
        name: 'iPhon 11',
        price: 999,
      },
    ],
  };
  render() {
    const productsCounter = this.state.productsList.length;
    return (
      <div className="column">
        <CartTitle count={productsCounter} userName={this.props.userName} />
        <ProductsList cartItems={this.state.productsList} />
      </div>
    );
  }
}
export default ShoppingCart;
