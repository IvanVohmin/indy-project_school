import React from 'react';
import AnimateBlock from '../../../../animations/AnimateBlock';
import Card from '../../Card/Card';
import styles from "../Categories.module.css"

const HotDishes = () => {
    return (
        <>
            <AnimateBlock>
                <div className={styles.category}>
                    <h1 className={styles.catTitle}>Горячее</h1>
                    <div className={styles.categoryInner}>
                        <div className={styles.parent}>

                            <Card
                                title={"Макаронны"}
                                price={15}
                                amount={35}
                            />
                            <Card
                                title={"Гречка с мясом"}
                                price={15}
                                amount={35}
                            />
                            <Card
                                title={"Каша овсянная"}
                                price={15}
                                amount={35}
                            />
                            <Card
                                title={"Суп красный"}
                                price={15}
                                amount={35}
                            />
                        </div>
                    </div>
                </div>
            </AnimateBlock>
        </>
    );
}

export default HotDishes;
