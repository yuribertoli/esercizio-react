import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './components/ProductDetails';

export default function Index() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App/>}>

          <Route index element={<Home/>} />

          <Route path='/product/:idCode' element={<ProductDetails/>} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
