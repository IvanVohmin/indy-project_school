import App from "../App";
import Layout from "../components/Layout/Layout";
import PageNotFound from "../pages/404/PageNotFound";
import Auth from "../pages/Auth/Auth";
import MyOrders from "../pages/MyOrders/MyOrders";
import Profile from "../pages/Profile/Profile";

export const appRoutes = [
    // todo : fix router protection
    {   
        path: "/",
        name: "home",
        isPrivate: false,
        el: <App />
    },
    {   
        path: "/auth",
        name: "auth",
        isAuth: true,
        isPrivate: false,
        el: <Auth />
    },
    {   
        path: "*",
        name: "404",
        isPrivate: false,
        el: <PageNotFound />
    },
    {   
        path: "/profile",
        name: "profile",
        isPrivate: true,
        el: <Profile />
    },
    {   
        path: "/myorders",
        name: "user orders",
        isPrivate: true,
        el: <MyOrders />
    },
]