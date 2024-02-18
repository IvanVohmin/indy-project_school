import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import useLS from "../hooks/useLS";


export const CartContext = createContext([])

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [indicator, setIndicator] = useState(false)
    const storage = useLS()

    const cartPush = (arg) => {
        let new_cart = [...cart, {...arg}];
        console.log("new cart > ", new_cart);
        setCart(new_cart);
        storage.setItem("cart", JSON.stringify(new_cart))
    }

    const getCartItem = (id) => {
        const el = cart.find(item => item.id === id);
        return el
    }

    const removeItemFromCart = (id) => {
        const indexToRemove = cart.findIndex(item => item.id === id);
        if (indexToRemove !== -1) {
            cart.splice(indexToRemove, 1);
        }
    }

    const editItem = (id, arg) => {
        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            cart[index] = arg;
        }
    }

    const calculateCart = () => {
        if (cart.length) {
            let sum = 0;
            cart.forEach(i => {
                sum = sum + i.price
            })

            return sum
        }
    }

    useEffect(() => {
        if (storage.getItem("cart") != null || storage.getItem("cart") != undefined) {
            const userCart = storage.getItem("cart")
            return setCart(JSON.parse(userCart))
        }
    }, [])

    return (
        <CartContext.Provider value={{cart, editItem, calculateCart, removeItemFromCart, getCartItem, cartPush, setIndicator, indicator}} >
            {children}
        </CartContext.Provider>
    )

}