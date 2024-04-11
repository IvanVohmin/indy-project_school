import React from 'react';
import AnimateBlock from '../../../../animations/AnimateBlock';
import { bakery } from '../../../../fakedata/food';
import Card from '../../Card/Card';
import styles from "../Categories.module.css"

const Bakery = () => {
    return (
        <>
            <AnimateBlock>
                <div className={styles.category}>
                    <h1 className={styles.catTitle}>Выпечка <i className="fa-light fa-bread-loaf"></i></h1>
                    <div className={styles.categoryInner}>
                        <div className={styles.parent}>
                            {!bakery.length && <p className='text-muted'>Товаров пока нету.</p>}
                            {bakery?.map(i => (
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

export default Bakery;
