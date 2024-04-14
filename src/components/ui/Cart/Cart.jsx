import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { OrdersContext } from '../../../context/OrdersContext';
import { UserContext } from '../../../context/UserContext';
import { useNotification } from '../../../hooks/useNotification';
import { useUser } from '../../../hooks/useUser';
import CartCard from '../Card/CartCard';

import styles from "./Cart.module.css"

const Cart = () => {

    const {authUser, changeBalance} = useContext(UserContext)
    const { cart, cartPush, calculateCart, clearCart, clearCartExternal } = useContext(CartContext)
    const { orderPush } = useContext(OrdersContext)

    const user = authUser

    const generateNumber = () => {
        const num = new Date().getTime();
        const strNum = num.toString();
        const firstSixDigits = strNum.substring(0, 6);

        return firstSixDigits
    }

    const handlePay = () => {
        if (!cart.length) return
        if (!window.confirm("Подтвердите оформление")) return
        if (user.user.balance < calculateCart()) return useNotification("error", "Недостаточно средств")
        useNotification("warning", "Заказ офомлен, ожидайте...")
        const out = {
            products: cart,
            number: Math.floor(100000 + Math.random() * 900000),
            totalCost: calculateCart(),
            owner: user.user.id,
            status: "PROGRESS"
        }
        orderPush(out)
        changeBalance(user.user.balance - calculateCart())
        clearCartExternal()
    }

    return (
        <>
            <div className={styles.cart}>
                <div className={styles.cartInner}>
                    {cart.length === 0 ? (
                        <>
                            <div className={styles.emptyCart}>
                                <h4>Корзина пока пустая...</h4>
                                {/* <button onClick={handleClick}>add</button> */}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.inline}>
                                <h1>Корзина</h1>
                                <button className={styles.clearBtn} onClick={clearCart}>Очистить корзину</button>
                            </div>
                            <div className={`${styles.cartMain}`}>
                                <div className={styles.parent}>
                                    {cart.map(i => (
                                        <div key={i.id} id={i.id}>
                                            <CartCard
                                                type={"cart"}
                                                title={i.title}
                                                price={i.price}
                                                id={i.id}
                                            />
                                        </div>

                                    ))}
                                </div>
                                <p className='hidden'> ------ </p>
                                <p className='hidden'> ------ </p>
                                <p className='hidden'> ------ </p>
                                <p className='hidden'> ------ </p>
                                <p className='hidden'> ------ </p>
                                <p className='hidden'> ------ </p>
                            </div>
                            <div className={`${styles.cartFooter} shadow-sm`}>
                                <div className={styles.cartFooterInner}>
                                    <p className={styles.cartFooterTotal}>Итого: <span className={styles.cartFooterTotalNum}>{calculateCart()} руб.</span></p>
                                    <button className="btn btn-success" onClick={() => handlePay()}>К оплате</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Cart;
