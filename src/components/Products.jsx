import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import SingleProduct from './SingleProduct';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import fetchData from '../utils/fetchProductData';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';
import { Col } from 'react-bootstrap';

import myData from '../data';

const Products = () => {
    const [search, setSearch] = useState("");
    const { cartInfo } = useContext(CartContext);
    const { cartCount, cartProducts } = cartInfo;
    const [products, setProducts] = useState([]);
    const [searchedProduct,setSearchedProduct] = useState([]);
    useEffect(() => {
        const newProductArray = myData.map((el) => {
            return { ...el, quantity: 0, individualProductTotal: 0 }
        })

        setProducts(newProductArray);
        setSearchedProduct(newProductArray);

    }, [])

    return (
        <>
            {console.log('Product comp bas', products)}
            {console.log('Product comp thas', searchedProduct)}

            <Row style={{ margin: '30px 0px', display: 'flex', justifyContent: 'center' }}>
                <Col lg={6}>
                    <input type="text" placeholder='Enter product name' style={{ width: '500px' }}
                        value={search} onChange={(e) => setSearch(e.target.value)}
                    />
                    
                    {
                        search && (
                            <div style={{ width: '500px', background: '#ebeff5', height: '300px', overflowY: 'auto', position:'absolute', zIndex:'1' }}>
                                {
                                    search && products.filter(({ title }) => {
                                        return title.indexOf(search) > -1
                                    }).map((el, i) => {
                                        return (
                                            <>
                                                <div style={{padding:'10px', borderBottom:'1px solid gray', cursor:"pointer"}}
                                                    onClick={() => {
                                                        setSearchedProduct([el])
                                                        setSearch("");
                                                    }}
                                                >
                                                    {el.title.length > 10 ? `${el.title.slice(0,30)}...` : el.title}
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </Col>
            </Row>
            <Container fluid>
                <Row lg={4} style={{ marginBottom: '20px', gap: '80px', justifyContent: 'center' }}>
                    {
                        searchedProduct.map((product) => {
                            return (
                                <SingleProduct product={product} key={product.id} />
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Products