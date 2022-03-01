import React from 'react';
import {Link} from 'react-router-dom'
import { store } from '../../app/store';
import {useSelector, useDispatch} from 'react-redux';
import { removeFromCart } from '../web/webSlice';

function OrderItem({user_id, order_id, inventory_id, quantity, status, payment, order_date}) {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const orderDate = order_date.slice(0,10)

    const gameIndex = state.web.games.findIndex(x => x.inventory_id === inventory_id)


    return (

        
        <div id="order-item">
            <p style={{width: "100px"}}>Order Reference : {order_id}</p>
            <img src={state.web.games[gameIndex].image} alt="" />
            <p style={{width: "200px"}}>{state.web.games[gameIndex].title}</p>
            <p>x {quantity}</p>
            <p>IID : {inventory_id}</p>
            <p>Order Status: {status === null ? "Confirmed": status} </p>
            <p>Order Date : {orderDate}</p>
        </div>    
        

  );
}

export default OrderItem;