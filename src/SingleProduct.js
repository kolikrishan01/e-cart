import React from 'react'
import { useCartContext } from './context/CartContext'
import { Link } from 'react-router-dom';
import "./Single.css"

const SingleProduct = () => {
    const {singleProduct} = useCartContext();

  return (
    <>
 <div className="revers">
  <Link to="/cart" className='link'><h3>Cart</h3></Link>
  
  <Link to="/" className='link'><h3>Home</h3></Link>
 </div>
    <div className='single-container'>
      <div className="image">
      <img src={singleProduct.image} alt={singleProduct.title} />
      </div>
      <div className="info">
        <h1>{singleProduct.title}</h1>
        <span>${singleProduct.price}</span>
        <p>{singleProduct.description}</p>
      </div>
    </div>
    </>
  )
}

export default SingleProduct
