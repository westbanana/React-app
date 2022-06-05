import React from 'react';
import './FooterComponents/FooterStyles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Store from './pages/Store';

const App = () => {
  console.log(1);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/react-store" element={<Store />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
