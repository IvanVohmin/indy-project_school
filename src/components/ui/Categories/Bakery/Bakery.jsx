import React from 'react';
import AnimateBlock from '../../../../animations/AnimateBlock';
import Card from '../../Card/Card';
import styles from "../Categories.module.css"

const Bakery = () => {
    return (
        <>
            <AnimateBlock>
                <div className={styles.category}>
                    <h1 className={styles.catTitle}>Выпечка</h1>
                    <div className={styles.categoryInner}>
                        <div className={styles.parent}>

                            <Card
                                title={"Пицца гашонная"}
                                price={15}
                                amount={35}
                            />
                            <Card
                                title={"Булочка с мармеладом"}
                                price={15}
                                amount={35}
                            />
                            <Card
                                title={"Булочка кислотная"}
                                price={15}
                                amount={35}
                            />
                            <Card
                                title={"Булочка с маком"}
                                price={15}
                                amount={35}
                            />
                            <Card
                                title={"Булочка со сгущенкой"}
                                price={15}
                                amount={35}
                            />
                            <Card
                                title={"Пончик"}
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

export default Bakery;
