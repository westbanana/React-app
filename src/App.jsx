import React from 'react';
import Header from './HeaderComponents/Header';
import MainContainer from './MainComponents/MainContainer';
import FooterContainer from './FooterComponents/FooterContainer';

const App = () => (
  <>
    {/* <video src={VideoSmoke} autoPlay className="video"></video> */}
    <Header />
    <MainContainer />
    <FooterContainer />
  </>
);

export default App;
