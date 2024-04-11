import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useConfirm } from "../hooks/useConfirm";
import useLS from "../hooks/useLS";
import { useNotification } from "../hooks/useNotification";


export const CartContext = createContext([])

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [indicator, setIndicator] = useState(false)
    const storage = useLS()

    const cartPush = (arg) => {
        const new_cart = [...cart, {...arg}];
        // console.log("new cart > ", new_cart);
        storage.setItem("cart", JSON.stringify(new_cart))
        setCart(new_cart);
    }

    const getCartItem = (id) => {
        const el = cart.find(item => item.id === id);
        return el
    }

    const removeItemFromCart = (id) => {
        const indexToRemove = cart.findIndex(item => item.id === id);
        if (indexToRemove !== -1) {
           cart.splice(indexToRemove, 1);
           setCart([...cart])
           storage.setItem("cart", JSON.stringify(cart))
           useNotification("success", "Товар удален из корзины.")
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

    const clearCart = () => {
        if (useConfirm("Очистить корзину?")) {
            storage.removeItem("cart")
            setCart([])
        }
    }

    const clearCartExternal = () => {
        storage.removeItem("cart")
        setCart([])
    }

    useEffect(() => {
        if (storage.getItem("cart") != null || storage.getItem("cart") != undefined) {
            const userCart = storage.getItem("cart")
            return setCart(JSON.parse(userCart))
        }
    }, [])

    return (
        <CartContext.Provider value={{cart, editItem, calculateCart, removeItemFromCart, getCartItem, cartPush, setIndicator, indicator, clearCart, clearCartExternal}} >
            {children}
        </CartContext.Provider>
    )

}