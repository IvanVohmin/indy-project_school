import React from 'react';
import styles from "./Navbar.module.css"
import { useNavigate } from "react-router-dom"
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
import { UserContext } from '../../../context/UserContext';
import RightPanel from "../RightPanel/RightPanel.jsx";
import Cart from "../Cart/Cart.jsx";

const Navbar = (props) => {

    const navigate = useNavigate()

    const { authUser } = React.useContext(UserContext)

    const [activeOrders, setActiveOrders] = React.useState(false)

    const auth_routes = [
        {
            id: 1,
            icon: "fa-home",
            title: "Главная",
            url: "/main"
        },
        {
            id: 2,
            icon: "fa-user",
            title: "Профиль",
            url: "/hello"
        },
        {
            id: 3,
            icon: "fa-light fa-bag-shopping",
            title: "Мои заказы",
            url: "/orders"
        },

    ]

    const unauth_routes = [
        {
            id: 1,
            icon: "fa-home",
            title: "Главная",
            url: "/main"
        },
        {
            id: 2,
            icon: "fa-light fa-right-to-bracket",
            title: "Войти",
            url: "/auth"
        },

    ]

    const NavbarLink = (props) => {

        const redirect = (url) => {
            // redirect
            navigate(url)
        }

        return (
            <div className={styles.navbarLink} onClick={() => redirect(props.to)}>
                <div className={styles.navbarLinkInner}>
                    {props.icon ?
                        <i className={`${styles.navbarLinkIcon} fa-light ${props.icon}`}></i>
                        :
                        <i className={`${styles.navbarLinkIcon} fa-light fa-null}`}></i>
                    }
                    {props.title ?
                        <p className={styles.navbarLinkTitle}>{props.title}</p>
                        :
                        <p className={styles.navbarLinkTitle}>undefined</p>
                    }
                </div>
            </div>
        )
    }


    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbarInner}>
                    {authUser.loaded ? (
                        authUser.isAuth ? (
                            auth_routes.map(i => (
                                i.url === "/orders" ? (
                                        <NavbarLink
                                            key={i.id}
                                            icon={i.icon}
                                            title={i.title}
                                            to={i.url}
                                        />
                                    )
                                : (
                                        <NavbarLink
                                            key={i.id}
                                            icon={i.icon}
                                            title={i.title}
                                            to={i.url}
                                        />
                                    )
                            ))
                        ) : (
                            unauth_routes.map(i => (
                                <NavbarLink
                                    key={i.id}
                                    icon={i.icon}
                                    title={i.title}
                                    to={i.url}
                                />
                            )) 
                        )
                    ) : (
                        <SkeletonLoader height={25} width={300} />
                    )}

                </div>
            </div>
            <RightPanel
                active={activeOrders}
                content={<Cart />}
                mobileTransform={767}
                onClose={() => setActiveOrders(false)}
            />
        </>
    );
}

export default Navbar;
