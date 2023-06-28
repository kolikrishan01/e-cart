import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Reducer"
import axios from "axios";
const Context = createContext();


const API = `https://fakestoreapi.com/products`;
const initialState = {
    isLoading: false,
    products: [],
    cart: [],
    isError: false,
}
const ProductProvider = ({children}) =>{
const [state, dispatch] = useReducer(reducer, initialState);
const fetchData = async (url) =>{
    dispatch({type: "SET_LOADING"});
try {
const res = await axios.get(url);
const products = await res.data;
dispatch({type: "SET_API_DATA", payload: products})
} catch (error) {
    dispatch({type: "SET_ERROR"});
}

}
useEffect(()=>{
    fetchData(API);
},[]);


return(
    <Context.Provider value={{...state}}>{children}</Context.Provider>
)
};


const useProductContext = () =>{
    return useContext(Context)
};
export { ProductProvider, useProductContext};