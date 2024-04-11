import React from "react";
import { useConfirm } from "../hooks/useConfirm";

export const UserContext = React.createContext({
    user: null,
    isAuth: false,
    loaded: false,
})

export const UserProvider = ({ children }) => {
    const [authUser, setAuthUser] = React.useState({
        user: null,
        isAuth: false,
        loaded: false,
    })

    const getUserDataFromStorage = () => {
        if (localStorage.getItem("user") == null || localStorage.getItem("user") == undefined) return null
        const user = JSON.parse(localStorage.getItem("user"))
        return user
    }

    const fetchUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/5')
        // const user = await response.json()
        const user = {
            name: "Иван Вохмин",
            balance: 4862,
        }
        setAuthUser({
            user: user,
            isAuth: true,
            loaded: true
        })
        console.log("[UserContext] User fetched")
    }

    React.useEffect(() => {
        if (!authUser.loaded) {
            const user = getUserDataFromStorage()
            console.log("[UserContext] useEffect() loading...")
            if (user === null) return setLoadingState(true)
            login(user)
        }
    }, [])

    const login = (arg) => {
        setAuthUser({
            user: arg,
            isAuth: true,
            loaded: true,
        })
        localStorage.setItem("user", JSON.stringify(arg))
    }

    const logout = () => {
        if (useConfirm("Подтвердите действие")) {
            setAuthUser({
                user: null,
                isAuth: false,
                loaded: true
            })
            localStorage.removeItem("user")
            //  window.location.href = "/"
        }
    }

    const changeBalance = (newBalance) => {
        if (authUser.user?.balance) {
            const updatedUser = {
                ...authUser.user,
                balance: newBalance
            };
    
            setAuthUser({
                ...authUser,
                user: updatedUser
            });
    
            localStorage.setItem("user", JSON.stringify(updatedUser));
        }
    }

    const setLoadingState = (arg) => {
        setAuthUser({
            user: authUser.user,
            isAuth: authUser.isAuth,
            loaded: arg
        })
    }

    return (
        <UserContext.Provider value={{ login, logout, authUser, changeBalance }}>
            {children}
        </UserContext.Provider>
    )
}
