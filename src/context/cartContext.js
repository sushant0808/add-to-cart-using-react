
import React, { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cartInfo,setCartInfo] = useState({
        cartCount : 0,
        cartProducts : [],
        cartProductIds:[],
    });
    return (
        <CartContext.Provider value={{cartInfo,setCartInfo}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;