import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCartItems => {
        const updatedCartItems = [...prevCartItems, product];
        console.log('Updated cart items:', updatedCartItems); // Log the updated cart items
        return updatedCartItems;
    });
};

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>      
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };



