import React from 'react'
import { useProductContext } from './context/Context'
import { useCartContext } from './context/CartContext';
import { Link } from 'react-router-dom';





const Products = () => {

    const {isLoading, products} = useProductContext();
    const {addToCart} = useCartContext();

   
    if(isLoading){
        return(
          <div className="loading-container">
          <div className="loader"></div>
          </div>
        )
    }
  return (
    <>
    <div className='container'>
      {
        products.map((curElem)=>{
            return(
                <div className='card' key={curElem.id}>
                    <div className="card-image">
                    <img src={curElem.image} alt={curElem.title}/>
                    </div>
                    <button onClick={()=>addToCart(curElem.id, products )}>Add To Cart</button>
                </div>
            )
        })
      }
    

  
    </div>
   
    </>
  )
}

export default Products
