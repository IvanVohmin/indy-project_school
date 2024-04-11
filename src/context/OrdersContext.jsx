import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const OrdersContext = createContext()

export const OrdersProvider = ({children}) => {
    const [orders, setOrders] = useState([])
    const [loaded, setLoad] = useState(false)

    const orderPush = (arg) => {
        const new_order = [...orders, {...arg}].reverse();
        // console.log("new cart > ", new_cart);
        localStorage.setItem("orders", JSON.stringify(new_order))
        setOrders(new_order);
    }

    const clear = () => {
        localStorage.removeItem("orders")
        setOrders([]);
    }

    useEffect(() => {
        if (!loaded) {
            if (localStorage.getItem("orders") != null || localStorage.getItem("orders") != undefined) {
                setOrders(
                    JSON.parse(localStorage.getItem("orders"))
                )
                return setLoad(true)
            }
        }
        
    })

    return (
        <OrdersContext.Provider value={{orders, orderPush, clear}}>
            {children}
        </OrdersContext.Provider>
    )
}