
import React, { useEffect, useState } from 'react'
import fetchData from '../utils/fetchProductData';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchData('https://fakestoreapi.com/products')
            .then((data) => {
                const newProductArray = data.map((el) => {
                    return { ...el, quantity: 0 }
                })

                console.log('newProductArray', newProductArray);
                setProducts(newProductArray);
            })
    }, [])

    return (
        <>
            {console.log('This is parent component')}
            {
                products.map((product) => {
                    return (
                        <ChildComponent product={product} key={product.id} />
                    )
                })
            }
        </>
    )
}

export default ParentComponent