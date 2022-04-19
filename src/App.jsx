import React from 'react';
import Header from './HeaderComponents/Header';
import MainContainer from './MainComponents/MainContainer';
import FooterContainer from './FooterComponents/FooterContainer';
import ButtonsGoToHeader from './HeaderComponents/ButtonsGoToHeader';

const App = () => (
  <>
    <ButtonsGoToHeader />
    {/* <video src={VideoSmoke} autoPlay className="video"></video> */}
    <Header />
    <MainContainer />
    <FooterContainer />
  </>
);

export default App;
