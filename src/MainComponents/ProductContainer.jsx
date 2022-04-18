import React from 'react';
import products from './Products/Products';

const ProductContainer = () => (
  <div className="container_with_products">
    {products.map((product) => (
      <div className="product_container">
        <img src={product.image} alt="product" className="product_image" />
        <div>
          <p className="product_name">{product.name}</p>
          <p className="product_price">{`${product.price}$`}</p>
        </div>
      </div>
    ))}
  </div>
);
export default ProductContainer;
