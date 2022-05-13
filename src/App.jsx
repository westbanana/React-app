import React, { useState } from 'react';
import Header from './HeaderComponents/Header';
import MainContainer from './MainComponents/MainContainer';
import FooterContainer from './FooterComponents/FooterContainer';
import ButtonsGoToHeader from './HeaderComponents/ButtonsGoToHeader';
import ShowVideo from './FooterComponents/video';
import './FooterComponents/FooterStyles.css';

const App = () => {
  const [addedProduct, setAddedProduct] = useState([]);
  const addProduct = (product) => {
    setAddedProduct(
      [product, ...addedProduct],
    );
  };
  // console.log(addedProduct);
  return (
    <>
      <ShowVideo />
      <ButtonsGoToHeader />
      <Header addedProduct={addedProduct} />
      <MainContainer addProduct={addProduct} />
      <FooterContainer />
    </>
  );
};

export default App;
