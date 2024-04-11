import React from 'react';
import AnimateBlock from '../../../../animations/AnimateBlock';
import Card from '../../Card/Card';
import styles from "../Categories.module.css"
import { drinks } from '../../../../fakedata/food';

const Drinks = () => {
    return (
        <>
            <AnimateBlock>
                <div className={styles.category}>
                    <h1 className={styles.catTitle}>Напитки <i className="ml-1 fa-light fa-cup-straw"></i></h1>
                    <div className={styles.categoryInner}>
                        <div className={styles.parent}>
                            {!drinks.length && <p className='text-muted'>Товаров пока нету.</p>}
                            {drinks?.map(i => (
                                <Card
                                    title={i.title}
                                    price={i.price}
                                    amount={0}
                                    data={i}
                                    key={i.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </AnimateBlock>
        </>
    );
}

export default Drinks;
