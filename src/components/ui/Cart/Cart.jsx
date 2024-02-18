import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import Card from '../Card/Card';
import styles from "./Cart.module.css"
import CartProduct from './CartProduct';

const Cart = () => {

    const { cart, cartPush, calculateCart } = useContext(CartContext)

    function handleClick() {
        const test = {
            title: "Пирожок",
            price: 123,
        }
        cartPush(test)
    }

    return (
        <>
            <div className={styles.cart}>
                <div className={styles.cartInner}>
                    {cart.length === 0 ? (
                        <>
                            <div className={styles.emptyCart}>
                                <h1>Корзина пока пустая...</h1>
                                <button onClick={handleClick}>add</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1>Корзина</h1>
                            <div className={`${styles.cartMain}`}>
                            <button onClick={handleClick}>add</button>
                                <div className={styles.parent}>
                                {cart.map(i => (
                                    <Card type={"cart"} title={i.title} price={i.price} key={i.price} />
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
                                    <button className="btn btn-success">К оплате</button>
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
