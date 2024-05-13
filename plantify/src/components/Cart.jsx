import { useContext } from "react";
import { CartContext } from "../App";

function Cart() {

    const { cart, setCart } = useContext(CartContext);

    const removeFromCart = (itemToRemove) => {
        setCart(cart.filter(item => item.name !== itemToRemove.name));
    };

    const increaseQuantity = (itemName) => {
        setCart(prevCart => prevCart.map(item => 
            item.name === itemName ? {...item, quantity: item.quantity + 1} : item
        ));
    };

    const decreaseQuantity = (itemName) => {
        setCart(prevCart => prevCart.map(item => 
            item.name === itemName && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
        ));
    };



    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-black mt-10">Your Cart</h1>
            </div>
            <div className="flex justify-center mt-12">
            <table className="text-stone-900 text-opacity-50 p-0 w-[60%] max-md:w-full">
                <thead className="p-0 text-start border-b-2 mb-8">
                    <tr className="text-left">
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="mt-8">
                    {cart.map((item) => (
                        <tr key={item.name} className="border-b-2 text-stone-900">
                            <td className="grid grid-cols-2 p-5">
                                <img src={item.image} alt={item.name} className="shrink-0 max-w-full border-2 border-solid aspect-square border-zinc-400 border-opacity-70 w-[100px] rounded" />
                                <span className="flex-auto my-auto">{item.name}</span>
                            </td>
                            <td>₱{item.price}</td>
                            <td className="align-middle">
                                <div className="flex gap-1">
                                <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c619aed78201f6bf5ef67b6ad473292616f731a6686dbc3f19967d695c556557?apiKey=8b5c844c9e604efba227618c0cf9b444&"
                                className="shrink-0 aspect-square w-[18px]"
                                onClick={() => increaseQuantity(item.name)}/>
                                <span>{item.quantity}</span>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1365de8bc633366ced8e5f2ad9169cc411ffe29cef80670e18de9dfd2d3fb42?apiKey=8b5c844c9e604efba227618c0cf9b444&"
                                    className="shrink-0 aspect-square w-[18px]"
                                    onClick={() => decreaseQuantity(item.name)}/>
                                </div>
                            </td>
                            <td>₱{item.price * item.quantity}</td>
                            <td>
                                <button onClick={() => removeFromCart(item)} className="justify-center px-6 py-2 whitespace-nowrap rounded-3xl bg-slate-300
                                hover:bg-slate-900 hover:text-white">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div className="flex mr-8 mt-8 justify-end">
                <div className="flex flex-col items-center">
                <h1 className="">Total: ₱{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h1>
                <button className="flex justify-center px-6 py-2 whitespace-nowrap rounded-3xl bg-slate-300 text-stone-900
                hover:bg-slate-900 hover:text-white">Checkout</button>
                </div>
                
            </div>
        </>
    );
}

export default Cart;