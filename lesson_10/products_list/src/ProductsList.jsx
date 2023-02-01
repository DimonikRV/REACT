import React from 'react';

const ProductsList = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="products">
      <ul className="products__list">
        <li className="products__list-item">
          <span className="products__item-name">iPhone 11</span>
          <span className="products__item-price">$999</span>
        </li>
        <li className="products__list-item">
          <span className="products__item-name">iPad Pro</span>
          <span className="products__item-price">$799</span>
        </li>
      </ul>
      <div className="products__total">{total}</div>
    </div>
  );
};
export default ProductsList;
