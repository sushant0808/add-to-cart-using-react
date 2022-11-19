import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';


const SingleProduct = ({ product}) => {

    const { cartInfo, setCartInfo } = useContext(CartContext);
    const { cartCount, cartProducts,cartProductIds } = cartInfo;
    const [addedToCartProductIds, setAddedToCartProductIds] = useState([]);


    const addProductToCart = (product) => {
        setCartInfo({
            ...cartInfo,
            cartCount: cartCount + 1,
            cartProducts: [...cartProducts, {...product,quantity: product.quantity + 1, individualProductTotal: product.price}],
            cartProductIds:[...cartProductIds,product.id]
        });

        // setAddedToCartProductIds([product.id]);
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
                cartCount:0,
                cartProducts: filteredCart,
                cartProductIds:filteredCartIds,
            }
        )
    }

    const check = (product,cartProducts) => {
        console.log('cartProductIds',cartProductIds);
        if(cartProductIds.includes(product.id)){
            // console.log('In single in if')
            // console.log('------------------')
            return (
                <Button variant="primary" key={product.id} onClick={() => removeFromCart(product)}>Remove from Cart</Button>
            )
        }else{
            // console.log('In single in else')
            // console.log('------------------')
            return(
                <Button variant="primary" key={product.id} onClick={() => addProductToCart(product)}>Add to Cart</Button>
            )
        }
    }

    return (
        <>
            <Col>
            {/* <Link to={`/product/${product.id}`} style={{textDecoration:'none', color:'normal'}}> */}
                <Card style={{ width: '20rem'}}>
                    <Link to={`/product/${product.id}`} style={{textDecoration:'none', color:'normal'}} target="_blank">
                        <Card.Img variant="top" src={product.image} height="250px" />
                    </Link>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            Category - {product.category}<br />
                            Rating - {product.rating.rate}/5
                        </Card.Text>
                        <Stack direction="horizontal" gap={3}>
                            {
                                check(product,cartProducts)
                            }

                            <div>
                                <b>Rs {product.price}</b>
                            </div>
                        </Stack>
                    </Card.Body>
                </Card>
            {/* </Link> */}
            </Col>
        </>
    )
}

export default SingleProduct