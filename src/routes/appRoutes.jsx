import App from "../App";
import Layout from "../components/Layout/Layout";
import PageNotFound from "../pages/404/PageNotFound";
import Auth from "../pages/Auth/Auth";

export const appRoutes = [
    {   
        path: "/",
        name: "home",
        isPrivate: false,
        el: <App />
    },
    {   
        path: "/auth",
        name: "auth",
        isPrivate: false,
        el: <Auth />
    },
    {   
        path: "*",
        name: "404",
        isPrivate: false,
        el: <PageNotFound />
    },
]