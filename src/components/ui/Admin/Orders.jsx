import React from 'react';
import axios from "axios"
import Order from '../../../pages/MyOrders/components/Order';
import { apiRoute } from '../../../api/api';
import { useNotification } from '../../../hooks/useNotification';

const Orders = () => {

    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        return async () => {
            try {
                const req = await axios.post(apiRoute("/orders"))
                if (req.status === 200) {
                    setOrders((req.data).reverse())
                }
            } catch (err) {
                console.log(err)
            }
        };
    }, []);

    const handleReady = async (id) => {
        if (window.confirm("Подтверите действие")) {
            const new_status = "READY"
            try {
                const req = await axios.put(apiRoute(`/order/${id}/status`), {
                    status: new_status
                })
                if (req.status === 200) {
                    useNotification("success", "Успешно!")
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    const handleRemove = async (id) => {
        if (window.confirm("Подтвердите действие")) {
            try {
                const req = await axios.delete(apiRoute(`/orders/${id}`))
                if (req.status === 200) {
                    useNotification("success", "Успешно!")
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className='admin-orders'>
            <h1 className='mb-2'>Заказы</h1>
            {orders.length ? (
                orders?.map(i => (
                    <Order
                        key={i._id}
                        data={i}
                        isAdmin={true}
                        onReady={handleReady}
                        onRemove={handleRemove}
                    />
                ))
            ) : (<p className='text-muted'>Заказов пока нету.</p>)}
            
        </div>
    );
}

export default Orders;
