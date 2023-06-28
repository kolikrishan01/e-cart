import React from 'react'
import { BsCart3 } from 'react-icons/bs';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';




const Navbar = () => {
const {product} = useCartContext();
  return (
    <div className='navbar'>
       <Link to="/"><h1>E-cart</h1></Link>
        <div className='cart-box'>
     <Link to="/cart"><BsCart3  className='icon'/></Link>
     <span>{product.length}</span>
     </div>
    </div>
  )
}

export default Navbar
