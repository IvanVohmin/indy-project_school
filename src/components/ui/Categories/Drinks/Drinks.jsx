import React from 'react';
import AnimateBlock from '../../../../animations/AnimateBlock';
import Card from '../../Card/Card';
import styles from "../Categories.module.css"

const Drinks = () => {
    return (
        <>
            <AnimateBlock>
                <div className={styles.category}>
                    <h1 className={styles.catTitle}>Напитки</h1>
                    <div className={styles.categoryInner}>
                        <div className={styles.parent}>
                            <Card
                                title={"Чай 3473 градусов"}
                                price={15}
                                amount={35}
                            />
                            <Card
                                title={"Сок Яблочный"}
                                price={15}
                                amount={35}
                            />
                            <Card
                                title={"Сок Персиковый"}
                                price={15}
                                amount={35}
                            />
                            <Card
                                title={"Вода 1.0 л"}
                                price={15}
                                amount={35}
                            />
                            <Card
                                title={"Компотик"}
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

export default Drinks;
