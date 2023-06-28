import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Cart from './Cart';
import Navbar from './Components/Navbar';
import SingleProduct from './SingleProduct';
import Footer from './Footer';


function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar />
   
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/singleproduct/:id' element={<SingleProduct />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
   </>
  );
}

export default App;
