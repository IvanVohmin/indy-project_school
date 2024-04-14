import React from 'react';
import AnimateBlock from '../../../animations/AnimateBlock';
import Food from './Food';
import Orders from './Orders';

const Admin = () => {

    const [page, setPage] = React.useState("food")

    return (
        <>
            <h1>Панель управления</h1>
            <div className="mt-3 mb-3">
                <button onClick={() => setPage('food')} className="btn btn-outline-secondary btn-sm mr-2">Товары</button>
                <button onClick={() => setPage('orders')} className="btn btn-outline-secondary btn-sm">Текущие заказы</button>
                <div className="admin-main mt-3">
                    {page === 'food' && 
                        <AnimateBlock>
                            <Food />
                        </AnimateBlock>
                    }
                    {page === 'orders' && 
                        <AnimateBlock>
                            <Orders />
                        </AnimateBlock>
                    }
                
                </div>
            </div>
        </>
    );
}

export default Admin;
