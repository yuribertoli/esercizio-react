import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './components/ProductDetails';

//redux:
import {Provider} from 'react-redux';
import store from './store/store';

export default function Index() {

  return (
    <BrowserRouter>

      <Routes>

        <Provider store={store}>

          <Route path="/" element={<App/>}>

            <Route index element={<Home/>} />

            <Route path='/product/:idCode' element={<ProductDetails/>} />

          </Route>

        </Provider>

      </Routes>

    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
