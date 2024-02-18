import React from "react";

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

    React.useEffect(() => {
        return (() => {
            if (!authUser.loaded) {
                fetch('https://jsonplaceholder.typicode.com/users/7')
                    .then(response => response.json())
                    .then(user => setTimeout(() => {
                        setAuthUser({
                            user: user,
                            isAuth: true,
                            loaded: true
                        })
                    }, 500)
                )
            }
        })
    }, [])

    const login = (arg) => {
        setAuthUser({
            user: arg,
            isAuth: true,
            loaded: true,
        })
    }

    const setLoaded = (arg) => {
        setAuthUser({
            user: authUser.user,
            isAuth: authUser.isAuth,
            loaded: arg
        })
    }

    const logout = () => {
        setAuthUser(
            {
                user: null,
                isAuth: false,
                loaded: true
            }
        )
    }

    return (
        <UserContext.Provider value={{ login, logout, authUser }}>
            {children}
        </UserContext.Provider>
    )
}