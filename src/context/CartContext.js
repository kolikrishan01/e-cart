import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer"

const CartContext = createContext();

const initialState = {
  product: [], 
  singleProduct: [],
}

const CartProvider = ({children}) =>{
const [state, dispatch] = useReducer(reducer, initialState);


const addToCart = (id,products) =>{
const product = products.find(product => product.id === id);
dispatch({type: "ADD_TO_CART", payload:product})
}



const addSingleProduct = (id,product) =>{
const singleProduct = product.find(prod => prod.id === id)
dispatch({type: "ADD_SINGLE_PRODUCT", payload:singleProduct})
}
const setIncrement = (id) =>{
        dispatch({ type: "SET_INCREMENT", payload: id})
        
}
const setDecrement = (id) =>{
dispatch({ type: "SET_DECREMENT", payload: id });
}
const remmoveItem = (id) =>{
    dispatch({type: "REMOVE_ITEM", payload: id})
}


    return (
        <CartContext.Provider value={{...state,
        addToCart,
        addSingleProduct, 
        setIncrement, 
        setDecrement,
        remmoveItem
        }}>{children}</CartContext.Provider>
    )
}


const useCartContext = () =>{
    return useContext(CartContext)
}

export { CartProvider, useCartContext }