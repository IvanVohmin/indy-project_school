import React from 'react';
import Bakery from '../Categories/Bakery/Bakery';
import Drinks from '../Categories/Drinks/Drinks';
import HotDishes from '../Categories/HotDishes/HotDishes';
import styles from "./styles.module.css"

const elements = {
    "Напитки": <Drinks />,
    "Горячее": <HotDishes />,
    "Выпечка": <Bakery />
}

const CategoriesRender = (props) => {
    return (
        <>
            {
                props.current in elements ? (
                    elements[props.current]
                ) : (
                    <p className='mt-3 text-muted'>Категория не найдена.</p>
                )
            }
        </>
    );
}

export default CategoriesRender;
