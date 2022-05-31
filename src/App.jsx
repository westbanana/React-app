import React, { useState } from 'react';
import Header from './HeaderComponents/Header';
import MainContainer from './MainComponents/MainContainer';
import FooterContainer from './FooterComponents/FooterContainer';
import ShowVideo from './FooterComponents/video';
import './FooterComponents/FooterStyles.css';

const App = () => {
  const [addedProduct, setAddedProduct] = useState([]);
  const auditDuplicate = (arr, element) => {
    const result = [...arr];
    const foundProduct = arr.find((I) => (I.id === element.id));
    if (foundProduct !== undefined) {
      const addCount = arr.map((I) => {
        if (I.id === foundProduct.id) {
          return { ...foundProduct, count: foundProduct.count + 1 };
        }
        return I;
      });
      return addCount;
    }result.push(element);
    return result;
  };
  const addProduct = (product) => {
    auditDuplicate(addedProduct, product);
    const qwe = auditDuplicate(addedProduct, product);
    setAddedProduct(qwe);
    // console.log(qwe);
  };
  return (
    <>
      <ShowVideo />
      <Header addedProduct={addedProduct} setAddedProduct={setAddedProduct} />
      <MainContainer addProduct={addProduct} />
      <FooterContainer />
    </>
  );
};

export default App;
