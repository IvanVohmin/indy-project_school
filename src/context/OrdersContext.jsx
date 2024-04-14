import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import { createContext } from "react";
import { apiRoute } from "../api/api";
import { useUser } from "../hooks/useUser";

export const OrdersContext = createContext()

export const OrdersProvider = ({ children }) => {
    const [orders, setOrders] = useState([])
    const [loaded, setLoad] = useState(false)

    const orderPush = async(arg) => {
        // const new_order = [...orders, { ...arg }].reverse();
        // // console.log("new cart > ", new_cart);
        // localStorage.setItem("orders", JSON.stringify(new_order))
        // setOrders(new_order);
        try {
            const req = await axios.post(apiRoute("/orders/create"), { ...arg })
            if (req.status === 200) {
                console.log("SUCCESS")
                updateOrders()
            }
        } catch (err) {
            console.log(err)
        }
    }

    const updateOrders = async() => {
        try {
            if (localStorage.getItem("user") == null) return
            const userDetails = JSON.parse(localStorage.getItem("user"))
            const req = await axios.get(apiRoute(`/orders/users/${userDetails.id}`))
            if (req.status === 200) {
                setOrders(req.data.orders)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (!loaded) {
            return async () => {
                if (localStorage.getItem("user") == null) return
                const userDetails = JSON.parse(localStorage.getItem("user"))
                try {
                    const userID = userDetails.id
                    const req = await axios.get(apiRoute(`/orders/users/${userID}`))
                    console.log(req.data)
                    if (req.status === 200) {
                        setOrders(req.data.orders)
                    }
                    setLoad(true)
                } catch(err) {
                    console.log("OrderContext -> " + err)
                    setOrders([])
                    setLoad(true)
                }
            }
        }

    })

    return (
        <OrdersContext.Provider value={{ orders, orderPush, updateOrders}}>
            {children}
        </OrdersContext.Provider>
    )
}