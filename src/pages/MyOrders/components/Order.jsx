import React from 'react';
import Modal from '../../../components/ui/Modal/Modal';
import RightPanel from '../../../components/ui/RightPanel/RightPanel';
import styles from "./Order.module.css"
import OrderDetails from './OrderDetails';

const Order = (props) => {

    const [dataShowed, setShowed] = React.useState(false)
    const data = { ...props.data }
    const [collapsed, setIsCollapsed] = React.useState(false)

    const status = () => {
        if (data.status === "PROGRESS") {
            return (
                <>
                    <p className={`${styles.status} text-warning`}>Готовится...</p>
                </>
            )
        }
        else if (data.status === "READY") {
            return (
                <>
                    <p className={`${styles.status} text-success`}>Готов! Заберите у кассы</p>
                </>
            )
        }
        else {
            return (
                <>
                    <p className={`${styles.status} text-secondary`}>{data.status}</p>
                </>
            )
        }
    }

    return (
        <>
            <div className={styles.order} onClick={() => setShowed(true)}>
                <p className={styles.title}>Заказ {data.number}</p>
                {status()}
                <div className={styles.wrapper}>
                    <div className={styles.products}>
                        <p className={styles.includes} onClick={() => setIsCollapsed(!collapsed)}>Содержимое заказа:</p>
                        <div className={styles.productsInner}>
                            {collapsed && data.products?.map(i => (
                                <div className={styles.product} key={i.id}>
                                    <p>{i.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p>Сумма заказа: {data.totalCost} руб.</p>
                </div>
            </div>
            {/* <RightPanel 

                // показать информацию о заказе
                active={dataShowed}
                content={<OrderDetails order={data} />}
                mobileTransform={767}
                onClose={() => setShowed(false)}

            /> */}
        </>
    )
}

export default Order