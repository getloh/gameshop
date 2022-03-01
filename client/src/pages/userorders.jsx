import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { db } from '../features/api/api';
import OrderItem from '../features/orders/orderitem';

function Userorders() {
  const state = useSelector(state => state)
  const navigate = useNavigate();

  useEffect(() => {
    const userId = state.user.userinfo.user_id;
    if (userId !== -1){
      db.getUserOrders(userId);
    }
    if (state.web.games[1] === undefined){
      db.getGameData();
    }
    return () => {};
  }, []);

  return (
    <div>
        <h1>Your Orders</h1>
        {state.user.order_history.map(x => <OrderItem 
          key = {x.order_id}
          user_id = {x.user_id}
          order_id = {x.order_id}
          inventory_id = {x.inventory_id}
          quantity = {x.quantity}
          status= {x.status}
          payment = {x.payment}
          order_date = {x.order_date}
        />)}


    </div>

  );
}

export default Userorders;
