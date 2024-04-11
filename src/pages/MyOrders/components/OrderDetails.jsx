import React from 'react';

const OrderDetails = (props) => {

    const data = {...props.order}

    return (
        <>
            <h2>{data.number}</h2>
        </>
    );
}

export default OrderDetails;
