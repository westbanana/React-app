import React, { useState } from 'react';
import ProductContainer from './ProductContainer';
import './MainStyles.css';
import AddedToBacket from './AddedToBacket';

const MainContainer = () => {
  const [productActive, setProductActive] = useState(false);
  const [addedProduct, setAddedProduct] = useState([]);
  console.log(addedProduct);
  return (
    <div className="main_container">
      <ProductContainer
        added={addedProduct}
        setAdded={setAddedProduct}
        active={productActive}
        setActive={setProductActive}
      />
      <AddedToBacket active={productActive} setActive={setProductActive} />
    </div>
  );
};
export default MainContainer;
