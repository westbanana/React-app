import React, { useState } from 'react';
import Header from './HeaderComponents/Header';
import MainContainer from './MainComponents/MainContainer';
import FooterContainer from './FooterComponents/FooterContainer';
import ShowVideo from './FooterComponents/video';
import './FooterComponents/FooterStyles.css';

const App = () => {
  const [addedProduct, setAddedProduct] = useState([]);
  const addProduct = (product) => {
    setAddedProduct(
      [product, ...addedProduct],
    );
    console.log(addedProduct);
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
