import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    let price=0;
    let tax=0;
    for (let i =0; i < cart.length; i++) {
        const course= cart[i];
        price= price +  course.price;
        tax= price* .15;
        total= price+ tax;
        tax= tax.toFixed(2);
        total= total.toFixed(2);

    }
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Courses Ordered: {cart.length}</p>
            <h5>Price: ${(price).toFixed(2)}</h5>
            <h6>Tax(15% included): ${tax}</h6>
            <h4>Total Price: ${total}</h4>

        </div>
    );
};

export default Cart;