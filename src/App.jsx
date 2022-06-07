import React from 'react';
import './FooterComponents/FooterStyles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Store from './pages/Store';
import GetImages from './pages/GetImagesPage/GetImages';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="app_container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/react-store" element={<Store />} />
        <Route path="/get-images" element={<GetImages />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
