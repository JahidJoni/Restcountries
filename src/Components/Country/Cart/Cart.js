import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h2>Cart : {props.cart.length}</h2>
        </div>
    );
};

export default Cart;