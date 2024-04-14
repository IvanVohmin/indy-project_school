import React from 'react';
import styles from "./Order.module.css"

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
                    {props.isAdmin && (
                        <div className='mt-2'>
                            <button onClick={() => props.onReady(data._id)} className="btn btn-success btn-sm mr-1">Готов!</button>
                            <button onClick={() => props.onRemove(data._id)} className="btn btn-danger btn-sm">Удалить заказ</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Order