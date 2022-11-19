import React from 'react'
import {Link} from 'react-router-dom'
import { Cart } from 'react-bootstrap-icons';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const Navbar = () => {

    const {cartInfo} = useContext(CartContext); // cartInfo has 2 things cartCount and cartProducts
    const {cartCount} = cartInfo; // Taking only cartCount from cartInfo
  return (
    <>
        <div className='main'>
            <ul className="navigation">
                <li><Link to="/" className='links'>Home</Link></li>
                <li><Link to="/products" className='links'>Products</Link></li>
                <li><Link to="/about" className='links'>About</Link></li>
                <li style={{ marginLeft:'auto', marginRight:'50px'}} className="cart-icon">
                    <Link to="/cart">
                        <Cart style={{color:'white', fontSize:'25px'}}/>
                        <span className='cart-count-text'>{cartCount}</span>
                    </Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar