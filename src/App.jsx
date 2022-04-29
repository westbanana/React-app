import React from 'react';
import Header from './HeaderComponents/Header';
import MainContainer from './MainComponents/MainContainer';
import FooterContainer from './FooterComponents/FooterContainer';
import ButtonsGoToHeader from './HeaderComponents/ButtonsGoToHeader';
import ShowVideo from './FooterComponents/video';
import './FooterComponents/FooterStyles.css';

const App = () => (
  <>
    <ShowVideo />
    <ButtonsGoToHeader />
    <Header />
    <MainContainer />
    <FooterContainer />
  </>
);

export default App;
