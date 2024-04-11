import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUser() {
    const {authUser} = useContext(UserContext)
    return authUser
}

export function configureUserName(arg) {
    const {authUser} = useContext(UserContext)
    if (authUser.isAuth === false) return
    const name = authUser.user.name
    const surname = authUser.user?.surname
    return `${name} ${surname === undefined ? '' : surname}`
}