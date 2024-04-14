import React from 'react';
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import RightPanel from "../RightPanel/RightPanel.jsx";
import Cart from "../Cart/Cart.jsx";
import useAuth from '../../../hooks/useAuth';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

const Navbar = (props) => {

    const auth = useAuth()

    const { authUser } = useContext(UserContext)

    const [activeOrders, setActiveOrders] = React.useState(false)

    const auth_routes = [
        {
            id: 1,
            icon: "fa-home",
            title: "Главная",
            url: "/"
        },
        {
            id: 2,
            icon: "fa-user",
            title: "Профиль",
            url: "/profile"
        },
        {
            id: 3,
            icon: "fa-light fa-bag-shopping",
            title: "Мои заказы",
            url: "/myorders"
        },

    ]

    const unauth_routes = [
        {
            id: 1,
            icon: "fa-home",
            title: "Главная",
            url: "/"
        },
        {
            id: 2,
            icon: "fa-light fa-right-to-bracket",
            title: "Войти",
            url: "/auth"
        },

    ]

    const admin_routes = [
        {
            id: 1,
            icon: "fa-home",
            title: "Главная",
            url: "/"
        },
        {
            id: 2,
            icon: "fa-user",
            title: "Профиль",
            url: "/profile"
        },
    ]

    const NavbarLink = (props) => {

        return (
            <Link className={styles.navbarLink} to={props.to}>
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
            </Link>
        )
    }


    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbarInner}>
                    {auth ? (
                        authUser.isAdmin ? (
                            admin_routes.map(i => (
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
                        ): (
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
                        )

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
                    }


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
