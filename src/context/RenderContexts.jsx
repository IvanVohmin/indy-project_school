import React from 'react';
import { CartProvider } from './CartContext';
import { OrdersProvider } from './OrdersContext';
import { UserProvider } from './UserContext';

const RenderContexts = ({ children }) => {
    return (
        <>
            <UserProvider>
                <CartProvider>
                    <OrdersProvider>
                        {children}
                    </OrdersProvider>
                </CartProvider>
            </UserProvider>
        </>
    );
}

export default RenderContexts;
