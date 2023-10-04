import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContextProvider = ({childeren}) => {
    const [cart, setCart] = useLocalStorage("cart", []);

    const addItem = (item) => {
        setCart([...cart, item]);
    };
    const removeItem = (id) => {
        setCart(cart.filter((item) => {
            return item.id !== id;
        }));
    };
    return (
        <CartContext.Provider value = {{cart, addItem, removeItem}}>
            {childeren}
        </CartContext.Provider>
    )
}

export const CartContext = createContext();

export default CartContextProvider;