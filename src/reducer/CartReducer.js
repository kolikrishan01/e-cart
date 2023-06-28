const CartReducer = (state, action) =>{
if(action.type === "ADD_TO_CART"){
  return{ ...state, 
    product: [...state.product, { ...action.payload, qty: 1, amount: 1 }] }
    
}

if(action.type === "ADD_SINGLE_PRODUCT"){
  return{
    ...state,
    singleProduct: action.payload,
  }
}
if (action.type === "SET_DECREMENT") {
  let updatedProduct = state.product.map((curElem) => {
    if (curElem.id === action.payload) {
      let decCount = curElem.qty - 1;
      
      if (decCount <= 1) {
        decCount = 1;
      }

      return {
        ...curElem,
        qty: decCount,
        
      };
    } else {
      return curElem;
    }
  });
  return { ...state, product: updatedProduct };
}
if (action.type === "SET_INCREMENT") {
  let updatedProduct = state.product.map((curElem) => {
    if (curElem.id === action.payload) {
      let incCount = curElem.qty + 1;
    
 
      return {
        ...curElem,
        qty: incCount,

      };
    } else {
      return curElem;
    }

  });
  
  return { ...state, product: updatedProduct };
}
if (action.type === "REMOVE_ITEM") {
  let updatedCart = state.product.filter(
    (curItem) => curItem.id !== action.payload
  );
  return {
    ...state,
    product: updatedCart,
  };
}
return state
}

export default CartReducer;

 

  
    