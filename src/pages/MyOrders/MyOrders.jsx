import React from 'react';
import Loader from '../../components/Loader/Loader';
import Navbar from '../../components/ui/Navbar/Navbar';
import Topbar from '../../components/ui/Topbar/Topbar';
import styles from './MyOrders.module.css'
import { userOrders } from "../../fakedata/orders.js";
import Order from "./components/Order.jsx";
import { useContext } from 'react';
import { OrdersContext } from '../../context/OrdersContext';

const MyOrders = () => {

    const {orders, clear} = useContext(OrdersContext)

    return (
        <Loader>
            <div className={styles.page}>
                <div className={styles.pageInner}>
                    <Topbar />
                    <div className="app-layout">
                        <button className="btn btn-sm btn-secondary mb-4" onClick={clear}>Очистить</button>
                        <h1 className={styles.title}>Мои заказы</h1>
                        <div className={styles.orders}>
                            {!orders.length && <p className={"text-muted"}>
                                Заказов пока нет
                            </p>}
                            {orders?.map(i => (
                                <Order
                                    data={i}
                                    key={i.id}
                                />
                            ))}
                        </div>
                    </div>
                    <Navbar />
                </div>
            </div>
        </Loader>
    );
}

export default MyOrders;
