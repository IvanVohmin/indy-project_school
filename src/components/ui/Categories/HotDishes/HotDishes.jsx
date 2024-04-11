import React from 'react';
import AnimateBlock from '../../../../animations/AnimateBlock';
import Card from '../../Card/Card';
import styles from "../Categories.module.css"
import { hot } from '../../../../fakedata/food';

const HotDishes = () => {
    return (
        <>
            <AnimateBlock>
                <div className={styles.category}>
                    <h1 className={styles.catTitle}>Горячее <i className="ml-1 fa-light fa-pot-food"></i></h1>
                    <div className={styles.categoryInner}>
                        <div className={styles.parent}>
                            {!hot.length && <p className='text-muted'>Товаров пока нету.</p>}
                            {hot?.map(i => (
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

export default HotDishes;
