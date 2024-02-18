import React from 'react';
import styles from "./Cart.module.css"

const CartProduct = (props) => {

    const data = props.data

    return (
        <>
         <div className={styles.cartProduct}>
            {data.title}
            {data.price}
         </div>   
        </>
    );
}

export default CartProduct;
