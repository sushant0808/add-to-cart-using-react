import React, { useRef, useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import Table from 'react-bootstrap/Table';
import { Button, Container, Stack } from 'react-bootstrap';
import { ImBin2 } from 'react-icons/im';
import {BsDashLg} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { FaBeer } from 'react-icons/fa';

const Cart = () => {
    const [cartItemQuantity, setCartItemQuantity] = useState(0);
    const { cartInfo, setCartInfo } = useContext(CartContext);
    const { cartCount, cartProducts, cartProductIds } = cartInfo;
    const decrementBtnRef = useRef();

    const incrementCartQuantityHandler = (productId) => {
        const updatedCartProducts = cartProducts.map((el) => {
            if (el.id === productId) {
                el = { ...el, quantity: el.quantity + 1, individualProductTotal: el.price * (el.quantity + 1)}
            }

            return el;
        })

        setCartInfo({
            ...cartInfo,
            cartProducts: updatedCartProducts,
        })
    }

    const decrementCartQuantityHandler = (productId) => {
        const updatedCartProducts = cartProducts.map((el) => {
            if (el.id === productId) {
                if(el.quantity === 1){
                    decrementBtnRef.current.disabled = true;
                    console.log(decrementBtnRef);
                }else{
                    el = { ...el, quantity: el.quantity - 1,individualProductTotal: el.individualProductTotal - el.price }
                }
            }

            return el;
        })

        setCartInfo({
            ...cartInfo,
            cartProducts: updatedCartProducts,
        })
    }

    const removeFromCart = (product) => {
        const filteredCart = cartProducts.filter((el) => {
            return el.id !== product.id;
        })

        const filteredCartIds = cartProductIds.filter((el) => {
            return el !== product.id;
        })

        setCartInfo(
            {
                ...cartInfo,
                cartCount: 0,
                cartProducts: filteredCart,
                cartProductIds: filteredCartIds,
            }
        )
    }

    return (
        <>
            {console.log('Cart products',cartProducts)}
            <Stack direction="horizontal" gap={5} style={{ height: '100px', alignItems: 'center', justifyContent: 'center' }}>
                <h1>This is your cart</h1>
                <b><span>Total : {
                    cartProducts.reduce((totalPrice, el) => {
                        return totalPrice + Math.trunc(el.individualProductTotal);
                    }, 0)
                }</span></b>
            </Stack>
            <hr />
            <Container>
                {
                    cartProducts.length ? (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Product Image</th>
                                    <th>Product Description</th>
                                    <th>Product Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartProducts.map((product) => {
                                        return (
                                            <tr style={{ height: '100px' }}>
                                                <td>
                                                    <img src={product.image} width="100px" height="100px" />
                                                </td>
                                                <td>
                                                    <p>
                                                        {
                                                            product.description.split('.').map((el) => {
                                                                return (
                                                                    <>
                                                                        <p style={{ margin: '0', padding: '0' }}>{el}</p>
                                                                    </>
                                                                )
                                                            })
                                                        }

                                                    </p>
                                                </td>
                                                <td>
                                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', height: '50px' }}>
                                                        <span>Rs.{Math.trunc(product.individualProductTotal)}</span>
                                                        <ImBin2 style={{ cursor: 'pointer' }} onClick={() => removeFromCart(product)} />
                                                    </div>

                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <ButtonToolbar aria-label="Toolbar with button groups">
                                                            <ButtonGroup className="me-2" aria-label="First group">
                                                                <Button disabled={product.quantity === 1 ? true : false} ref={decrementBtnRef}  className="addCartItemIcons" onClick={() => decrementCartQuantityHandler(product.id)}>
                                                                    <BsDashLg/>
                                                                </Button>
                                                                <Button className="addCartItemIcons">{product.quantity}</Button>
                                                                <Button className="addCartItemIcons" onClick={() => incrementCartQuantityHandler(product.id)}><AiOutlinePlus/></Button>
                                                            </ButtonGroup>
                                                        </ButtonToolbar>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    ) : (
                        <>
                            <h2 style={{ textAlign: 'center' }}>Cart is empty</h2>
                        </>
                    )
                }

            </Container>
        </>
    )
}

export default Cart