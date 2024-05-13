import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Product_info from './components/Product_info';
import Cart from './components/Cart';
import About from './components/About';
import Profile from './components/Profile';
import './App.css';

export const CartContext = createContext();


function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      // Check if product is already in cart
      const existingProduct = prevCart.find(item => item.name === product.name);
  
      if (existingProduct) {
        // If product is already in cart, increase quantity
        return prevCart.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } 
      
      else {
        // If product is not in cart, add it
        const newCart = [...prevCart, { ...product, quantity: 1 }];
        return newCart;
      }

    });
  }

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item !== product));
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);


  return (
    <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop/:product_display" element={<Shop/>} />
          <Route path="/shop/:product_display/:product_name" element={<Product_info/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path='/about' element={<About/>} /> 
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );

}

export default App;
