import React from 'react';
import {Link} from 'react-router-dom'
import { store } from '../../app/store';
import {useSelector, useDispatch} from 'react-redux';
import { removeFromCart } from '../web/webSlice';

function OrderItem({user_id, order_id, inventory_id, quantity, status, payment, order_date}) {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const orderDate = order_date.slice(0,10)

    return (

        
        <div id="order-item">
            <p>Order Reference : {order_id}</p>
            <p>x {quantity}</p>
            <p>Item ID : {inventory_id}</p>
            <p>Order Status: {status === null ? "Confirmed": status} </p>
            <p>Order Date : {orderDate}</p>
        </div>    
        

  );
}

export default OrderItem;