import React from 'react';
import { CartContext } from '../../../context/CartContext';
import { useNotification } from '../../../hooks/useNotification';
import styles from "./Card.module.css"

const Card = (props) => {

    const { title, price, data, isAdmin } = props

    const { cartPush } = React.useContext(CartContext)

    const addProduct = () => {
        cartPush(data)
        useNotification("success", `${title} добавлен в корзину`)
    }

    const formatCat = (arg) => {
        if (arg === "drinks") return "Напитки"
        if (arg === "hot") return "Горячее"
        if (arg === "bakery") return "Выпечка"
    }

    return (
        <>
            {isAdmin ? (
                <div className={`${styles.card} mt-3`}>
                    <div className={styles.cardInner}>
                        <p className={styles.title}>{props.data.title}</p>
                        <p className='mt-2 mb-2'>Категория: {formatCat(props.data.category)}</p>
                        <p className={styles.price}>{props.data.price} руб</p>
                        <div className={`${styles.buttons} mt-2`}>
                            <button onClick={() => props.onEdit(props.data)} className='btn btn-outline-warning btn-sm mr-1'>
                                <i className="fa-light fa-pen"></i>
                            </button>
                            <button onClick={() => props.onRemove(props.data)}  className='btn btn-outline-danger btn-sm'>
                                <i className="fa-light fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.card}>
                    <div className={styles.cardInner}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.price}>{price} руб</p>
                        <div className={styles.buttons}>
                            <button className="btn btn-success btn-sm mt-3" onClick={addProduct}>В корзину <i className="fa-duotone fa-cart-shopping ml-1"></i></button>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    );
}

export default Card;
