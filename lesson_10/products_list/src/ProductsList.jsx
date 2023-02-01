import React from 'react';

const ProductsList = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(({ id, name, price }) => (
          <li className="products__list-item" key={id}>
            <span className="products__item-name">{name}</span>
            <span className="products__item-price">{price}</span>
          </li>
        ))}
      </ul>
      <div className="products__total">{total}</div>
    </div>
  );
};
export default ProductsList;
