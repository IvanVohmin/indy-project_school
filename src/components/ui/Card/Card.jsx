import React from 'react';
import styles from "./Card.module.css"

const Card = (props) => {

    const { type, title, amount, price, action } = props

    return (
        <>
            {type === "cart" ? (
                <div className = {styles.card}>
                    <div className={styles.cardInner}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.price}>{price} руб</p>
                        <div className={styles.buttons}>
                            <button className="btn btn-warning btn-sm mt-3">В корзину <i className="fa-duotone fa-cart-shopping ml-1"></i></button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className = {styles.card}>
                    <div className={styles.cardInner}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.price}>{price} руб</p>
                        <div className={styles.buttons}>
                            <button className="btn btn-success btn-sm mt-3">В корзину <i className="fa-duotone fa-cart-shopping ml-1"></i></button>
                        </div>
                    </div>
                </div>
    )
}
        </>
    );
}

export default Card;
