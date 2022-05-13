import React from 'react';
import products from './Products/Products';

const ProductContainer = ({
  active, setActive, addProduct,
}) => {
  const handleClick = (product) => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1000);
    addProduct(
      product,
    );
  };
  return (
    <div className="container_with_products">
      {products.map((product) => (
        <div className="product_container" role="presentation" key={`${product.name} ${Math.random()}`}>
          <img src={product.image} alt="product" className="product_image" />
          <button
            type="button"
            className={`add_to_backet${active ? ' click' : ''}`}
            onClick={() => handleClick(product)}
          >
            Add to backet
          </button>
          <div>
            <p className="product_name">{product.name}</p>
            <p className="product_price">{`${product.price}$`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductContainer;
