import React from 'react';
import { CartContext } from '../../../context/CartContext';
import { useNotification } from '../../../hooks/useNotification';
import styles from "./Card.module.css"

const Card = (props) => {

    const { title, price, data } = props

    const { cartPush } = React.useContext(CartContext)

    const addProduct = () => {
        cartPush(data)
        useNotification("success", `${title} добавлен в корзину`)
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardInner}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.price}>{price} руб</p>
                    <div className={styles.buttons}>
                        <button className="btn btn-success btn-sm mt-3" onClick={addProduct}>В корзину <i className="fa-duotone fa-cart-shopping ml-1"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
