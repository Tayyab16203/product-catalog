import { createContext, useState } from "react"
import PRODUCTS from '../products'


export const shopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

const shopContextProvider = (props) => {

    const [ cartItems, setCartItems ] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }

    const updateCartItemsCount = (newAmount, itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: newAmount }))
    }

    const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
    };
    
    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemsCount, getTotalCartAmount };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  )
}

export default shopContextProvider
