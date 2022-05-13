import React, { useState } from 'react';
import ProductContainer from './ProductContainer';
import './MainStyles.css';
import AddedToBacket from './AddedToBacket';

const MainContainer = ({ addProduct }) => {
  const [productActive, setProductActive] = useState(false);
  return (
    <div className="main_container">
      <ProductContainer
        active={productActive}
        setActive={setProductActive}
        addProduct={addProduct}
      />
      <AddedToBacket active={productActive} setActive={setProductActive} />
    </div>
  );
};
export default MainContainer;
