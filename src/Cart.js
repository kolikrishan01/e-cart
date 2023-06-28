import React from 'react'
import { useCartContext } from './context/CartContext'
import "./Cart.css";
import { AiFillPlusSquare, AiFillMinusSquare, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Cart = () => {

const {product, addSingleProduct, setIncrement,setDecrement,remmoveItem} = useCartContext();

  return (
    <div>
    <h1>Cart Item</h1>

<div className="cart-header">
  <div className="cart-product">
    <span>Product</span>
  </div>
  <div className="cart-price-qty-total">
    <span>Price</span>
    <span>Quantity</span>
    <span>Total</span>

  </div>
</div>

 {
  product.map((curElem)=>{
    return(
      <div key={curElem.id} className='cart-container'>
      <div className="cart-img-title">
        <Link to={`/singleproduct/${curElem.id}`}><img src={curElem.image} alt="" onClick={()=>addSingleProduct(curElem.id, product)}/></Link>
        <div className='title'>{curElem.title}</div>
        </div>
        <div className="product-info">
          <div className='price'>${curElem.price}</div>
          <div className="qty-box">
          <AiFillMinusSquare className='qty-icon' onClick={()=>setDecrement(curElem.id, product)}/>
          <div className='qty'>{curElem.qty}</div>
          <AiFillPlusSquare className='qty-icon' onClick={()=>setIncrement(curElem.id, product)}/>
          </div>
          <div className='total'>${curElem.price * curElem.qty}</div>
          <AiOutlineClose className='close-icon' onClick={()=>remmoveItem(curElem.id)}/>
        </div>
        
      </div>
    )
  })
 }

    </div>
  )
}

export default Cart
