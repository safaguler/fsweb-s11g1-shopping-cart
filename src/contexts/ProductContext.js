import { createContext } from "react";
import { data } from "../data";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ProductContextProvider = ({childeren}) => {
    const [products, setProducts] = useLocalStorage("products", data);

    return (
        <ProductContext.Provider value={products}>
{childeren}
        </ProductContext.Provider>
    );
};

export const ProductContext = createContext();

export default ProductContextProvider;
