import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import CartProvider from './context/cartContext';
import ParentComponent from './components/ParentComponent';
import NewProvider from './context/newContext';
import ViewSingleProduct from './components/ViewSingleProduct';


function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path='/cart' element={<Cart />}></Route>
            <Route path="/product/:id" element={<ViewSingleProduct/>}></Route>
          </Routes>
        </Router>
      </CartProvider>

      {/* <NewProvider>
        <ParentComponent/>
      </NewProvider> */}
    </>
  )
}

export default App;
