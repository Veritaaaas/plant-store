import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);
    console.log( cart );

    return (
        <div>
    
        </div>
);
};

export default Cart;