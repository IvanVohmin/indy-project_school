import React from 'react';
import { CartProvider } from './CartContext';
import { UserProvider } from './UserContext';

const RenderContexts = ({children}) => {
    return (
        <>  
            <UserProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </UserProvider>
        </>
    );
}

export default RenderContexts;
