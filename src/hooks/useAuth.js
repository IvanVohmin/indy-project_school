import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function useAuth() {
    const { authUser } = useContext(UserContext)
    return authUser.isAuth
}