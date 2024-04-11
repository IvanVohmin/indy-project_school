import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import styles from "./Card.module.css"

const CartCard = (props) => {

    const { type, title, amount, price, id } = props

    const {removeItemFromCart} = useContext(CartContext)

    const handleRemove = (id) => {
        if (window.confirm("Вы точно хотите это удалить?")) {
            removeItemFromCart(id)
        }
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardInner}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.price}>{price} руб</p>
                    <div className={styles.buttons}>
                        <button className="btn btn-danger btn-sm mt-3" onClick={() => handleRemove(id)}>Убрать <i className="fa-light fa-trash ml-1"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartCard;
