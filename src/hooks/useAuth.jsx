import { useContext } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import {useState} from "react"
import { UserContext } from "../context/UserContext";

export default function useAuth() {
    const { authUser } = useContext(UserContext)
    const [auth, setIsAuth] = useState(authUser.isAuth);

    useEffect(() => {
        setIsAuth(authUser.isAuth)
    }, [authUser.isAuth])

    return auth

}