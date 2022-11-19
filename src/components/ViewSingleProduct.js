
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../utils/fetchProductData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiOutlineStar} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa';
import myData from '../data';

const ViewSingleProduct = () => {
  const [individualProduct,setIndividualProduct] = useState({});
  const { id } = useParams();
  console.log('id',id);

  const commonFlexStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  }

  useEffect(() => {
    // fetchData('https://fakestoreapi.com/products')
    //   .then((data) => {
    //     let newProductArray = data.map((el) => {
    //       return { ...el, quantity: 0, individualProductTotal: 0 }
    //     })

    //     setIndividualProduct(...newProductArray.filter((el) => {
    //       return el.id === Number(id);
    //     }))

    //   })

    let newProductArray = myData.map((el) => {
      return { ...el, quantity: 0, individualProductTotal: 0 }
    })

    setIndividualProduct(...newProductArray.filter((el) => {
      return el.id === Number(id);
    }))
  }, [])

  return (
    <>
      {console.log(individualProduct.rating)}
      <Container style={{height:'300px', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Row>
          <Col lg={5} style={{border:'1px solid #dae3dc'}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <img src={individualProduct.image} width="200px" height="200px"/>
            </div>
          </Col>
          <Col lg={7}>
            <div style={{margin:'10px 0 10px 10px'}}>
              <h4>{individualProduct.title}</h4>
            </div>

            <div style={{margin:'10px 0 10px 10px', width:'50px',display:'flex',alignItems:'center', justifyContent:'center',
              background:'#269442', height:'20px',gap:'5px', color:'white', padding:'15px 20px'
            }}>
              <span>{individualProduct.rating ? individualProduct.rating.rate : null}</span>
              <b><span><AiOutlineStar/></span></b>
            </div>

            <div style={{margin:'10px 0 10px 10px',fontSize:'25px',display:'flex', alignItems:'center' , width:'100px'}}>
              <div><FaRupeeSign style={{display:'flex', fontSize:'25px'}}/></div>
              <div>{individualProduct.price}</div>
            </div>

            <div style={{margin:'10px 0 10px 10px'}}> 
              <span><b>Category: </b></span>
              <span>{individualProduct.category}</span>
            </div>
          </Col>
        </Row>
      </Container>
      {

      }
    </>
  )
}

export default ViewSingleProduct